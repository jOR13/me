-- Anonymous portfolio analytics, living in the cuicui-db project (prefixed to avoid clashes).
-- The site can only call portfolio_track() and read the two public totals.
create table if not exists public.portfolio_stats (key text primary key, value bigint not null default 0, updated_at timestamptz not null default now());
insert into public.portfolio_stats (key) values ('visits'), ('cv_downloads') on conflict (key) do nothing;
alter table public.portfolio_stats enable row level security;
revoke all on public.portfolio_stats from anon, authenticated;
grant select on public.portfolio_stats to anon, authenticated;
drop policy if exists "Public can read portfolio stats" on public.portfolio_stats;
create policy "Public can read portfolio stats" on public.portfolio_stats for select to anon, authenticated using (true);

create table if not exists public.portfolio_events (id bigint generated always as identity primary key, created_at timestamptz not null default now(), type text not null check (type in ('visit','cv_download','contact','project')), label text, referrer text, lang text, tz text, device text);
create index if not exists portfolio_events_created_at_idx on public.portfolio_events (created_at);
alter table public.portfolio_events enable row level security;
revoke all on public.portfolio_events from anon, authenticated;

create or replace function public.portfolio_track(p_type text, p_label text default null, p_referrer text default null, p_lang text default null, p_tz text default null, p_device text default null)
returns bigint language plpgsql security definer set search_path = public as $$
declare v bigint;
begin
  if p_type not in ('visit','cv_download','contact','project') then return null; end if;
  insert into public.portfolio_events (type, label, referrer, lang, tz, device) values (p_type, left(p_label,60), left(p_referrer,120), left(p_lang,10), left(p_tz,60), left(p_device,20));
  if p_type = 'visit' then update public.portfolio_stats set value = value + 1, updated_at = now() where key = 'visits' returning value into v;
  elsif p_type = 'cv_download' then update public.portfolio_stats set value = value + 1, updated_at = now() where key = 'cv_downloads' returning value into v;
  end if;
  return v;
end; $$;
revoke all on function public.portfolio_track(text,text,text,text,text,text) from public;
grant execute on function public.portfolio_track(text,text,text,text,text,text) to anon, authenticated;

-- Private reporting views (schema not exposed through the Data API). Query them in the SQL editor.
create schema if not exists portfolio_analytics;
revoke all on schema portfolio_analytics from anon, authenticated;
create or replace view portfolio_analytics.daily as select (created_at at time zone 'America/Ciudad_Juarez')::date as day, count(*) filter (where type='visit') as visits, count(*) filter (where type='cv_download') as cv_downloads, count(*) filter (where type='contact') as contacts, count(*) filter (where type='project') as project_clicks from public.portfolio_events group by 1 order by 1 desc;
create or replace view portfolio_analytics.sources as select coalesce(referrer,'direct') as source, count(*) as visits from public.portfolio_events where type='visit' group by 1 order by 2 desc;
create or replace view portfolio_analytics.clicks as select type, label, count(*) as clicks from public.portfolio_events where type in ('contact','project','cv_download') group by 1,2 order by 3 desc;
create or replace view portfolio_analytics.audience as select tz, lang, device, count(*) as visits from public.portfolio_events where type='visit' group by 1,2,3 order by 4 desc;
