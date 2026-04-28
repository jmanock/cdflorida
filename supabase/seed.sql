insert into public.deals (
  id, cruise_line, ship_name, departure_port, destination, nights, starting_price, sail_date, image, deal_url, last_checked, category
) values
('pc-wonder-3n-bahamas', 'Royal Caribbean', 'Wonder of the Seas', 'Port Canaveral', 'Nassau & Perfect Day at CocoCay', 3, 279, '2026-05-15', 'https://images.unsplash.com/photo-1548574505-5e239809ee19?auto=format&fit=crop&w=1200&q=80', 'https://www.royalcaribbean.com/', '2026-04-27T08:15:00-04:00', 'last-minute'),
('mia-celebration-4n-bahamas', 'Carnival', 'Carnival Celebration', 'Miami', 'Bahamas', 4, 259, '2026-05-22', 'https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?auto=format&fit=crop&w=1200&q=80', 'https://www.carnival.com/', '2026-04-27T08:05:00-04:00', 'family'),
('fll-sun-princess-7n-caribbean', 'Princess Cruises', 'Sun Princess', 'Fort Lauderdale', 'Eastern Caribbean', 7, 549, '2026-06-07', 'https://images.unsplash.com/photo-1599640842225-85d111c60e6b?auto=format&fit=crop&w=1200&q=80', 'https://www.princess.com/', '2026-04-27T07:55:00-04:00', 'standard'),
('tpa-paradise-5n-western', 'Carnival', 'Carnival Paradise', 'Tampa', 'Cozumel & Grand Cayman', 5, 329, '2026-05-30', 'https://images.unsplash.com/photo-1580541631950-7282082b53ce?auto=format&fit=crop&w=1200&q=80', 'https://www.carnival.com/', '2026-04-27T08:20:00-04:00', 'standard'),
('jax-elation-4n-bahamas', 'Carnival', 'Carnival Elation', 'Jacksonville', 'Freeport & Nassau', 4, 239, '2026-05-18', 'https://images.unsplash.com/photo-1566375638485-5f0223f8e2e9?auto=format&fit=crop&w=1200&q=80', 'https://www.carnival.com/', '2026-04-27T08:02:00-04:00', 'last-minute'),
('mia-msc-seashore-3n-ocean-cay', 'MSC Cruises', 'MSC Seashore', 'Miami', 'Ocean Cay MSC Marine Reserve', 3, 199, '2026-05-08', 'https://images.unsplash.com/photo-1602002418816-5c0aeef426aa?auto=format&fit=crop&w=1200&q=80', 'https://www.msccruisesusa.com/', '2026-04-27T08:30:00-04:00', 'last-minute'),
('pc-disney-treasure-4n-bahamas', 'Disney Cruise Line', 'Disney Treasure', 'Port Canaveral', 'Castaway Cay & Nassau', 4, 749, '2026-06-12', 'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1200&q=80', 'https://disneycruise.disney.go.com/', '2026-04-27T07:45:00-04:00', 'family'),
('fll-holland-eurodam-10n-southern', 'Holland America', 'Eurodam', 'Fort Lauderdale', 'Southern Caribbean', 10, 699, '2026-07-04', 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80', 'https://www.hollandamerica.com/', '2026-04-27T07:38:00-04:00', 'standard'),
('mia-ncl-encore-7n-western', 'Norwegian Cruise Line', 'Norwegian Encore', 'Miami', 'Western Caribbean', 7, 499, '2026-06-21', 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80', 'https://www.ncl.com/', '2026-04-27T08:10:00-04:00', 'family'),
('tpa-rhapsody-6n-belize', 'Royal Caribbean', 'Rhapsody of the Seas', 'Tampa', 'Belize & Cozumel', 6, 389, '2026-06-02', 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=80', 'https://www.royalcaribbean.com/', '2026-04-27T08:18:00-04:00', 'standard'),
('pc-msc-grandiosa-7n-caribbean', 'MSC Cruises', 'MSC Grandiosa', 'Port Canaveral', 'Caribbean & Ocean Cay', 7, 449, '2026-06-28', 'https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=1200&q=80', 'https://www.msccruisesusa.com/', '2026-04-27T08:12:00-04:00', 'family'),
('fll-celebrity-beyond-6n-eastern', 'Celebrity Cruises', 'Celebrity Beyond', 'Fort Lauderdale', 'Grand Cayman & Bahamas', 6, 579, '2026-06-14', 'https://images.unsplash.com/photo-1540202404-a2f29016b523?auto=format&fit=crop&w=1200&q=80', 'https://www.celebritycruises.com/', '2026-04-27T07:50:00-04:00', 'standard'),
('mia-virgin-scarlet-4n-key-west', 'Virgin Voyages', 'Scarlet Lady', 'Miami', 'Key West & Bimini', 4, 298, '2026-05-10', 'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1200&q=80', 'https://www.virginvoyages.com/', '2026-04-27T08:26:00-04:00', 'last-minute'),
('jax-elation-5n-princess-cays', 'Carnival', 'Carnival Elation', 'Jacksonville', 'Princess Cays & Nassau', 5, 319, '2026-06-08', 'https://images.unsplash.com/photo-1493558103817-58b2924bce98?auto=format&fit=crop&w=1200&q=80', 'https://www.carnival.com/', '2026-04-27T07:58:00-04:00', 'family'),
('pc-independence-4n-cococay', 'Royal Caribbean', 'Independence of the Seas', 'Port Canaveral', 'CocoCay & Nassau', 4, 289, '2026-05-25', 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80', 'https://www.royalcaribbean.com/', '2026-04-27T08:21:00-04:00', 'family'),
('tpa-celebrity-constellation-5n-mexico', 'Celebrity Cruises', 'Celebrity Constellation', 'Tampa', 'Costa Maya & Cozumel', 5, 429, '2026-06-19', 'https://images.unsplash.com/photo-1589308078059-be1415eab4c3?auto=format&fit=crop&w=1200&q=80', 'https://www.celebritycruises.com/', '2026-04-27T07:42:00-04:00', 'standard'),
('mia-ncl-sky-3n-bahamas', 'Norwegian Cruise Line', 'Norwegian Sky', 'Miami', 'Great Stirrup Cay & Nassau', 3, 219, '2026-05-16', 'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?auto=format&fit=crop&w=1200&q=80', 'https://www.ncl.com/', '2026-04-27T08:33:00-04:00', 'last-minute'),
('fll-emerald-princess-8n-aruba', 'Princess Cruises', 'Emerald Princess', 'Fort Lauderdale', 'Aruba, Curacao & Bonaire', 8, 639, '2026-07-12', 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=1200&q=80', 'https://www.princess.com/', '2026-04-27T07:36:00-04:00', 'standard')
on conflict (id) do update set
  cruise_line = excluded.cruise_line,
  ship_name = excluded.ship_name,
  departure_port = excluded.departure_port,
  destination = excluded.destination,
  nights = excluded.nights,
  starting_price = excluded.starting_price,
  sail_date = excluded.sail_date,
  image = excluded.image,
  deal_url = excluded.deal_url,
  last_checked = excluded.last_checked,
  category = excluded.category,
  updated_at = now();
