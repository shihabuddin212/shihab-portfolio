const configuredUrl = process.env.SITE_URL || "https://mdshihabuddin.me";

export const siteUrl = new URL(configuredUrl).toString().replace(/\/$/, "");
