
<div align="center">

### 🚧 WORK IN PROGRESS 🚧  
This project is currently under active development.  
Some features may be incomplete, and parts of the codebase may be subject to change.

💡 **Contributions are welcome**—please note that the repository is still evolving.

</div>

<h1 align="center">
  Automated Milk Procurement System (AMPS)
</h1>

<p align="center">Designed for <strong>milk collection centers</strong>, AMPS simplifies and streamlines the milk procurement process. It supports efficient data entry, storage, and management to ensure accurate and timely milk collection operations.</p>

<p align="center">
  <img src="https://github.com/user-attachments/assets/118492ec-34bd-4032-8315-5c510485c2f3" alt="Milk Collection Group 1">
</p>

---

## 🗂️ System Architecture

```txt
         +--------------------+
         |   <<device>>       |
         |   Milk Analyzer    |
         +--------------------+
                    |
                    v
         +--------------------+        +----------------------+
         |   <<adapter>>      |<------>|   Weighing Machine   |
         |      Adapter       |        +----------------------+
         +--------------------+
                    |
                    v
         +--------------------+
         |     AMPS App       |<--------+
         +--------------------+         |
                    |                   |
               [Bluetooth]        +----------------+
                    |             |    Printer     |
                    v             +----------------+

         +--------------------+
         |      <<sync>>      |
         |       Sync         |
         +--------------------+
               /         \
              /           \
             v             v
   +----------------+   +-------------------+
   |    Local DB    |   |       API         |
   +----------------+   +-------------------+
                              |
                              v
                      +-------------------+
                      |    Remote DB      |
                      +-------------------+
```

---

## 📊 Data Model

<p align="center">
  <img src="https://github.com/user-attachments/assets/eb27d11d-336f-419d-9fdd-9d4307b9c6a0" alt="AMPS Data Model" style="width:100%;" />
</p>

---

## ✅ Features

- **Intuitive User Interface**: Built for ease of use by milk collection center staff.
- **Automated Logging**: Automatically records volume, quality, and timestamp of milk collections.
- **Secure Data Management**: Ensures safe storage and easy access to all records.
- **Real-Time Sync**: Seamlessly syncs data to the cloud when online.
- **Analytics & Reporting**: Provides visual reports on volume, quality, and trends.

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/balaji-sivasakthi/amps
cd amps
```

### 2. Install Dependencies

Ensure you have [Yarn](https://yarnpkg.com/) installed, then run:

```bash
yarn install
```

### 3. Start the Application

Launch the app using Expo:

```bash
expo start
```

Use the Expo Go app on your device or a simulator to run the application.

---

## 📖 How to Use

1. **Open the App** on your mobile device or emulator.
2. **Authenticate**: Log in or register a new account.
3. **Begin Collection**: Input milk data including volume and quality.
4. **Automatic Syncing**: The app will sync data with the server whenever a connection is available.
5. **Access Reports**: Generate and review reports for analysis and auditing.

---

## 🧰 Tech Stack

- **React Native**: Cross-platform mobile development framework.
- **Expo**: Toolchain for streamlined app development and deployment.
- **Yarn**: Dependency and package management.


