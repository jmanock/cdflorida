create extension if not exists pgcrypto;

create table if not exists public.deals (
  id text primary key,
  cruise_line text not null,
  ship_name text not null,
  departure_port text not null,
  destination text not null,
  nights integer not null check (nights > 0),
  starting_price integer not null check (starting_price > 0),
  sail_date date not null,
  image text not null,
  deal_url text not null,
  last_checked timestamptz not null default now(),
  category text not null default 'standard' check (category in ('standard', 'last-minute', 'family')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.subscribers (
  id uuid primary key default gen_random_uuid(),
  email text not null unique,
  source text,
  created_at timestamptz not null default now()
);

alter table public.deals enable row level security;
alter table public.subscribers enable row level security;

drop policy if exists "Deals are publicly readable" on public.deals;
create policy "Deals are publicly readable"
on public.deals for select
using (true);

drop policy if exists "Subscribers can be inserted by visitors" on public.subscribers;
create policy "Subscribers can be inserted by visitors"
on public.subscribers for insert
with check (email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$');

create index if not exists deals_departure_port_idx on public.deals (departure_port);
create index if not exists deals_starting_price_idx on public.deals (starting_price);
create index if not exists deals_last_checked_idx on public.deals (last_checked desc);
