# Product Management

## Wireframes

### Dashboard
```
+-------------------------------------------+
| Product Management System                 |
+-------------------------------------------+
| [Add Product]  [Add Supplier]             |
|                                           |
| Total Products: 128   Low Stock: 7        |
|                                           |
| [Product List]  [Suppliers]  [Deliveries] |
| [Categories]    [Export]     [Settings]   |
+-------------------------------------------+
```
### Product List
```
+-----------------------------------------------+
| Products                                       |
+-----------------------------------------------+
| Search: [______________]  [ + Add Product ]    |
+-----------------------------------------------+
| SKU         | Name       | Stock | Supplier   |
|-------------|------------|-------|------------|
| TSHIRT-M-RED| T-shirt    | 12    | Acme       |
| JEANS-32BL  | Jeans blå  | 4     | DenimCorp  |
| SHOE-42-WHT | Sneakers   | 0     | SportX     |
+-----------------------------------------------+
| Pages: [1][2][3]                               |
+-----------------------------------------------+
```
### Add / Edit Product
```
+------------------------------------------+
| Product: [T-shirt]                       |
+------------------------------------------+
| SKU: [TSHIRT]                            |
| Supplier: [Acme Textiles v]              |
| Supplier Item #: [AC-45678]              |
| Category: [T-shirts v]                   |
| Price: [199]      VAT: [25%]             |
| Cost Price: [120]                        |
| Active: [✔]                              |
+------------------------------------------+
| Description:                             |
| [Bomullströja i hög kvalitet...]         |
+------------------------------------------+
| [ Variations ]                           |
| [+ Add Variation]                        |
|  - Storlek: XS, S, M, L, XL              |
|  - Färg: Röd, Svart, Grå                 |
+------------------------------------------+
| [ Save Product ]  [ Cancel ]             |
+------------------------------------------+
```
### Variation handler
```
+-----------------------------------------+
| Variation Editor                        |
+-----------------------------------------+
| Variation Name: [Storlek tröja]         |
| Type: [size v]                          |
| Required: [✔]                           |
+-----------------------------------------+
| Options:                                |
| [ XS ] [ S ] [ M ] [ L ] [ XL ]         |
| [+ Add option]                          |
+-----------------------------------------+
```
### SupplierView
```
+-----------------------------------------+
| Suppliers                               |
+-----------------------------------------+
| Search: [______________] [+ Add ]       |
+-----------------------------------------+
| Name         | Contact      | # Products|
|--------------|--------------|-----------|
| Acme         | info@acme.se | 15        |
| DenimCorp    | hello@denim | 22        |
| SportX       | sportx@x.se  | 34        |
+-----------------------------------------+
```

### Register export
```
+-------------------------------------------+
| Export                                     |
+-------------------------------------------+
| Export format: [JSON v]                   |
| Include: [✔] Active Products only         |
|          [✔] Variants + Stock             |
+-------------------------------------------+
| [ Export & Download ]                     |
+-------------------------------------------+

```


## ROADMAP

🗺️ Roadmap: Produkt- & Kassasystem-plattform
🔹 Fas 1 – Grunden (✅ på mycket redan)
Steg	Beskrivning
✅ Typade modeller	Product, Supplier, Variation, Locale – check!
✅ Generiska API-funktioner	get, post, update, remove
✅ axios-instans	Timeout, headers – bra setup
✅ Data via db.json	json-server speglar verklig backend
✅ SKU-generator	Baserad på variations – smart

🔹 Fas 2 – UI + TanStack Query + Hooks (🛠️ på gång)
Steg	Beskrivning
🧩 Sidor med react-router	T.ex. /products, /suppliers, /variations, /settings
🪝 Custom Hooks	useProducts(), useSuppliers(), useVariations() (med TanStack useQuery)
📦 Caching och loading states	Integrera TanStack Query i alla dataflöden
💬 Locale-stöd	useLocale() hook + context, med JSON-baserade översättningar
🧪 Mock av fel / laddning / empty states	Bygg UX för edge-cases direkt

🔹 Fas 3 – Produktlogik & Lagerhantering
Steg	Beskrivning
🔧 productVariations-modell	Variant-permutationer med SKU och lagersaldo
🛒 Lagerstatus per variant	Hantera inleveranser, justeringar och saldo
📦 Supplier-order stöd	Skicka beställningar från products baserat på leverantörens artikelnummer
📁 Exportera JSON för kassasystem	Generera ett /catalog.json baserat på all produktdata
⛓️ Inbyggd SKU-validator	Hindra dubbletter, fel-format etc.

🔹 Fas 4 – Backend-integration & auth
Steg	Beskrivning
🛠️ Byt från json-server till riktig backend	Ex: Express.js, Fastify, Laravel, Supabase etc.
🔐 Auth + sessions	JWT-baserad inloggning, skydda vissa routes
📤 Deployment	Hostas på Vercel / Netlify, backend på t.ex. Render / Fly.io
💾 Databas	PostgreSQL eller MongoDB, beroende på datamodell

🔹 Fas 5 – POS-integration & production-ready
Steg	Beskrivning
🧾 POS-export i korrekt format	Anpassa utdata till olika kassasystem (t.ex. Sitoo, Extenda, Visma)
📡 Webhook eller sync-endpoint	Gör det möjligt för POS att hämta katalog-data via t.ex. GET /export/catalog.json
👤 Multi-user support	Flera användare per konto (ex. admin + anställda)
🧩 Pluggbart variationssystem	Lägg till egna variationstyper i gränssnittet
🧪 E2E-tester	Cypress eller Playwright för att säkerställa produktflödet