# Expense Tracker App

[Expense Tracker App](app_screenshot.png)

The Expense Tracker App is a Node.js application that allows users to efficiently manage their expenses by capturing and storing images of invoices using their phone's camera. The app leverages the power of Node.js, Sequelize, Docker, and PostgreSQL to provide users with a seamless experience in organizing their expenses, tracking spending patterns, and gaining insights into their purchasing habits.

## Features

- **Capture and Store**: Users can take photos of their invoices using the app's camera feature, which then gets stored securely in the PostgreSQL database.

- **Expense Categorization**: The app automatically extracts relevant information from the invoice images, such as vendor name, date, and total amount. Users can manually categorize expenses and assign tags for better organization.

- **Expense Analytics**: The app provides detailed analytics on spending patterns, including average prices at different establishments, best places to make larger purchases, and optimal days to buy specific products.

- **Data Visualization**: Interactive graphs and charts visualize spending habits over time, allowing users to gain insights into their financial behavior.

- **User-Friendly Interface**: The user interface is designed to be intuitive and user-friendly, making it easy for users to navigate through their expenses and analysis.

## Technologies Used

- **Node.js**: The backend of the application is built using Node.js, providing a robust and scalable foundation for handling user requests and data processing.

- **Express.js**: The web application framework Express.js is used to create a RESTful API for communication between the frontend and backend.

- **Sequelize**: Sequelize is used as the Object-Relational Mapping (ORM) tool to interact with the PostgreSQL database, making it easy to manage and query data.

- **Docker**: The application is containerized using Docker, allowing for consistent deployment across various environments and reducing compatibility issues.

- **PostgreSQL**: The PostgreSQL database is used to store all user data securely, including invoice images, expense details, and analytics information.

## Getting Started

To run the Expense Tracker App locally, follow these steps:

1. **Clone the Repository**: `git clone https://github.com/rafacoper/expe-back`

2. **Navigate to the Directory**: `cd expe-back`

3. **Install Dependencies**: `npm install`

4. **Set Up PostgreSQL Database**: Create a PostgreSQL database and update the connection configuration in `config/database.js`.

5. **Start the Application**: `npm start`

6. **Access the App**: Open your web browser and go to `http://localhost:5800` to access the app.

## Contributing

Contributions are welcome! If you'd like to contribute to the Expense Tracker App, please follow these steps:

1. Fork the repository.

2. Create a new branch: `git checkout -b feature-new-feature`.

3. Make your changes and commit them: `git commit -m 'Add new feature'`.

4. Push to the branch: `git push origin feature-new-feature`.

5. Create a pull request detailing your changes.

## License

This project is licensed under the [MIT License](LICENSE).

---

Start organizing your expenses and gaining insights into your spending habits with the Expense Tracker App! For any questions or issues, please [contact](mailto:rafaelbarbosa.tecnologia@gmail.com).
