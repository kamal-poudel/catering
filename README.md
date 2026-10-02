# 🍽️ Gobind Catering - Full-Stack Web Application & Digital Menu

> **Caters of Distinction for All Occasions — Indoor & Outdoor Parties**  
> **# 158/1, Balaji Complex, Sector 12-A Rally, Panchkula (Hry.)**  
> **M : 9815483536, 9877717905**

A production-quality full-stack application built for **Gobind Catering**. It digitizes the catering business's raw material requisition process while preserving the exact layout, Hindi typography, and design of the original printed 2-page Gobind Catering order form.

---

## 🌟 Core Features

- **Predefined Hindi Menu Catalog (255 Items)**:
  - Extracted verbatim from both original menu pages without translation.
  - Organized by original sections: MDH Masalas, Karyana Goods, Soft Drinks, Dry Fruits, Disposable Items, Sweets, Dairy Products, Fruits, Vegetables, General Equipment, and Non-Veg.
  - The client or caterer never has to type item names.
- **Smart Quantity & Unit Selection**:
  - Pre-filled with standard catering units (Kg, Gram, Litre, Packet, Piece, Plate, etc.).
  - Supports integers, decimals (e.g. `2.5`, `0.5`), and empty quantities.
  - Touch-friendly inputs with fast search and category filter tabs.
- **Blank Quantity Behavior**:
  - Items left blank are **not** printed with "0" and are **not** deleted.
  - Their respective quantity areas on the original menu remain completely blank.
- **High-Fidelity PDF Generation**:
  - Uses `pdf-lib` to overlay quantities and units into the exact pre-printed `Qty.` boxes of the original Gobind Catering 2-page menu template.
  - Overlays optional Event Date, Total Persons, and Customer Name & Address on Page 1 header and Total/Advance/Balance on Page 2 footer.
- **Modern PDF UX**:
  - Live in-browser PDF preview modal.
  - **Download PDF** (`Gobind-Catering-Menu.pdf`).
  - **Print** directly from browser.
  - **Share** via native mobile Web Share API with automated download fallback.
- **Mobile-First Responsive Design**:
  - Built with React, Vite, Tailwind CSS, and Lucide icons.
  - Optimized for touch screens, tablets, and desktops.

---

## 🏗️ Tech Stack & Architecture

- **Frontend**: React 18, Vite, Tailwind CSS, React Router v6, Lucide React icons
- **Backend**: Node.js, Express.js, CORS, Morgan, dotenv
- **Database**: MongoDB & Mongoose
- **PDF Engine**: `pdf-lib` (template overlay engine)

```
catering/
├── backend/
│   ├── src/
│   │   ├── config/
│   │   │   └── db.js                 # MongoDB connection
│   │   ├── controllers/
│   │   │   └── menuController.js     # Handlers for menu items & PDF generation
│   │   ├── data/
│   │   │   ├── menuSeedData.js       # Complete 255 items catalog with calibrated coordinates
│   │   │   └── seed.js               # MongoDB seeding script
│   │   ├── models/
│   │   │   └── MenuItem.js           # Mongoose schema
│   │   ├── routes/
│   │   │   └── menuRoutes.js         # REST endpoints (/api/menu, /api/generate-pdf)
│   │   ├── services/
│   │   │   └── pdfService.js         # PDF generation and coordinate overlay engine
│   │   ├── templates/
│   │   │   ├── gobind-menu-page-1.pdf
│   │   │   └── gobind-menu-page-2.pdf
│   │   ├── app.js                    # Express app configuration
│   │   └── server.js                 # Server entry point
│   ├── .env
│   ├── .env.example
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx            # Responsive navigation
│   │   │   ├── Footer.jsx            # Contact details & placeholders
│   │   │   ├── EventInfoBar.jsx      # Optional party & event info
│   │   │   ├── CategoryNav.jsx       # Category tabs & instant Hindi search
│   │   │   ├── MenuTable.jsx         # Clean table-like menu layout
│   │   │   └── PdfPreviewModal.jsx   # Live preview, download, print & share
│   │   ├── pages/
│   │   │   ├── HomePage.jsx          # Premium landing page
│   │   │   └── MenuPage.jsx          # Digital menu requisition page
│   │   ├── services/
│   │   │   └── api.js                # Frontend API client
│   │   ├── App.jsx                   # Route configuration
│   │   ├── main.jsx                  # React entry point
│   │   └── index.css                 # Custom fonts & Tailwind directives
│   ├── index.html
│   └── package.json
│
├── templates/
│   ├── gobind-menu-page-1.pdf        # Original Gobind Catering Page 1 template
│   └── gobind-menu-page-2.pdf        # Original Gobind Catering Page 2 template
│
├── .env.example
├── package.json                      # Workspace root scripts
└── README.md
```

---

## 🚀 Quick Start Guide

### 1. Prerequisites
- **Node.js**: v18.0.0 or higher (v20+ recommended)
- **MongoDB**: v5.0 or higher running locally (default: `mongodb://127.0.0.1:27017`) or a MongoDB Atlas URI

---

### 2. Environment Variables Setup

Both backend and frontend support `.env` configuration. Default `.env` files are already included:

#### Backend (`backend/.env`):
```env
PORT=5000
MONGODB_URI=mongodb://127.0.0.1:27017/gobind_catering
FRONTEND_URL=http://localhost:5173
```

#### Frontend (`frontend/.env`):
```env
VITE_API_URL=http://localhost:5000
```

---

### 3. Install Dependencies

You can install all dependencies from the root directory:

```bash
# From the project root
npm run install:all
```

Or install separately:
```bash
# Backend
cd backend
npm install

# Frontend
cd ../frontend
npm install
```

---

### 4. Seed the Database

Seed MongoDB with the complete 255 predefined Hindi menu items extracted from the original menu:

```bash
# From the project root
npm run seed

# OR from inside backend/
cd backend
npm run seed
```

Output:
```
Connecting to MongoDB at: mongodb://127.0.0.1:27017/gobind_catering
Clearing existing menu items...
Seeding 255 menu items...
Successfully seeded 255 menu items!
Database connection closed.
```

---

### 5. Running the Application

You can run both backend and frontend together with a single command from the project root:

```bash
npm run dev
```

Or run them in separate terminals:

#### Terminal 1 — Backend:
```bash
cd backend
npm run dev
```
*Backend will run on [http://localhost:5000](http://localhost:5000)*

#### Terminal 2 — Frontend:
```bash
cd frontend
npm run dev
```
*Frontend will run on [http://localhost:5173](http://localhost:5173)*

---

## 🌐 Routes

| Route | Description |
|-------|-------------|
| `/` | **Home Page** — Stylish landing page highlighting Gobind Catering's heritage, services, why choose us, contact info, and "Generate Menu" CTA. |
| `/generate-menu` | **Digital Menu Page** — Main operational page displaying all predefined Hindi items in a table, quantity/unit inputs, search, category filters, and PDF generation. |

---

## 📐 How PDF Coordinates Work

The PDF generator preserves the authentic Gobind Catering order form by using the scanned 2-page template as the background and overlaying text on top using `pdf-lib`.

### Coordinate Space:
- Each page is `768 x 1024` points.
- In `pdf-lib`, `(0, 0)` is at the **bottom-left** corner of the page, and `(768, 1024)` is at the **top-right** corner.
- In image/screen space, `(0, 0)` is at the top-left corner.
- Conversion formula:
  $$\text{pdf\_y} = 1024 - \text{image\_y}$$

### Column Positions:
- **Page 1**:
  - Column 1 Qty X: `215`
  - Column 2 Qty X: `415`
  - Column 3 Qty X: `605`
- **Page 2**:
  - Column 1 Qty X: `265`
  - Column 2 Qty X: `450`
  - Column 3 Qty X: `645`

### Row Spacing:
- **Page 1**: Each row has a height of `16.55` points starting at base Y `199`.
- **Page 2**: Each row has a height of `18.2` points starting at base Y `70`.

### Data Driven:
Each `MenuItem` in MongoDB stores its exact position:
```json
{
  "nameHindi": "पनीर",
  "category": "DAIRY PRODUCTS",
  "defaultUnit": "Kg",
  "allowedUnits": ["Kg", "Gram"],
  "pdfPage": 2,
  "columnIndex": 1,
  "rowIndex": 36,
  "quantityPosition": {
    "x": 265,
    "y": 298.8
  }
}
```
You can adjust coordinates in `backend/src/data/menuSeedData.js` and re-run `npm run seed` without modifying any code logic!

---

## ➕ How to Add or Update Menu Items

1. Open `backend/src/data/menuSeedData.js`.
2. Add or update the item object:
   ```js
   {
     nameHindi: 'नया आइटम',
     category: 'KARYANA GOODS',
     defaultUnit: 'Kg',
     allowedUnits: ['Kg', 'Gram'],
     displayOrder: 256,
     pdfPage: 1,
     columnIndex: 2,
     rowIndex: 46,
     quantityPosition: { x: 415, y: 260.0 }
   }
   ```
3. Run `npm run seed` in `backend/` to update MongoDB.

---

## 🧪 Testing PDF Generation

You can test PDF generation directly via the REST API or via the Web UI:

### Via Web UI:
1. Open `http://localhost:5173/generate-menu`.
2. Enter `5` for पनीर (`Kg`).
3. Enter `2.5` for चाट मसाला (`Packet`).
4. Enter `100` for गुलाब जामुन (`Piece`).
5. Leave other items blank.
6. Click **Generate Menu PDF**.
7. The preview modal will display the authentic Gobind Catering menu with your entered quantities filled into the exact boxes! Click **Download PDF** or **Share**.

### Via cURL / API:
```bash
curl -X POST http://localhost:5000/api/generate-pdf \
  -H "Content-Type: application/json" \
  -d '{"items":[{"menuItemId":"<ITEM_ID>","quantity":"5","unit":"Kg"}]}' \
  --output test-menu.pdf
```

---

## 🚀 Production Deployment

### Prerequisites
- **MongoDB Atlas** cluster created with credentials
- **Render** account for backend deployment
- **Vercel** account for frontend deployment
- **GitHub** repository with the code

### Step 1: Deploy Backend to Render

1. **Push code to GitHub** (if not already done):
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Create Render deployment**:
   - Go to [https://dashboard.render.com](https://dashboard.render.com)
   - Click **"New +"** → **"Web Service"**
   - Connect your GitHub repository
   - Select the branch (e.g., `main`)
   - **Name**: `gobind-catering-backend`
   - **Root Directory**: `backend`
   - **Runtime**: Node
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`

3. **Add Environment Variables**:
   - Click **"Environment"** tab
   - Add the following:
     ```
     NODE_ENV=production
     PORT=5000
     MONGODB_URI=mongodb+srv://<db_username>:<db_password>@<cluster-host>/gobind_catering?retryWrites=true&w=majority
     FRONTEND_URL=https://your-vercel-domain.vercel.app
     ```

4. **Deploy**:
   - Click **"Create Web Service"**
   - Render will build and deploy automatically
   - Once live, note the backend URL (e.g., `https://gobind-catering-backend.onrender.com`)

5. **Seed Database** (first time only):
   - Go to **"Shell"** tab in Render
   - Run: `cd backend && node src/data/seed.js`
   - Verify: Visit `https://gobind-catering-backend.onrender.com/api/menu` to see 255 items

### Step 2: Deploy Frontend to Vercel

1. **Go to Vercel**:
   - Visit [https://vercel.com](https://vercel.com)
   - Click **"Import Project"**
   - Connect GitHub and select your repository

2. **Configure Project**:
   - **Project Name**: `gobind-catering-frontend`
   - **Framework**: Vite
   - **Root Directory**: `frontend`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`

3. **Add Environment Variables**:
   - Go to **"Settings"** → **"Environment Variables"**
   - Add:
     ```
     VITE_API_URL=https://gobind-catering-backend.onrender.com
     ```

4. **Deploy**:
   - Click **"Deploy"**
   - Vercel will build and deploy automatically
   - Once live, your app will be available at `https://your-project.vercel.app`

### Step 3: Update Backend FRONTEND_URL (After Frontend Deployment)

Once Vercel gives you the frontend URL:
1. Go back to Render dashboard
2. Update the `FRONTEND_URL` environment variable to your Vercel domain
3. Redeploy the backend

---

## 📋 License & Business Information
- **Business**: Gobind Cooking & Catering
- **Contact**: +91 9815483536 / +91 9877717905
- **Branch**: # 158/1, Balaji Complex, Sector 12-A Rally, Panchkula (Hry.)
- Developed as a production-grade MVP for raw material menu requisitions.
