module.exports = {
    PORT : process.env.PORT || 5000,
    DB : {
        HOST: process.env.DB_HOST || "localhost",
        USER: process.env.DB_USER || "root",
        PASSWORD: process.env.DB_PASSWORD || "",
        SCHEMA: process.env.DB_SCHEMA || "sales_record"
    }
}