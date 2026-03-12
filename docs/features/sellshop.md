---
sidebar_position: 4
---
# Selling Moodle Courses Through Joomla

Joomdle lets you sell Moodle courses through Joomla by integrating any of the supported e-commerce Joomla extensions.

Using an e-commerce extension has the added benefit of being able to purchase multiple courses at once, thus:

- You can give your users a better shopping experience
- You can reduce transaction fees

You can also use all payment methods supported by the selected e-commerce extension.

You can check the supported extensions in the 3rd Party integration section.

## Setup Instructions

1. First, ensure that the selected extension is working properly for normal products.
2. Install the required Joomdle integration plugins for the extension you are using.  
   You can find additional information about each one in **3rd_Party_Integration**.
3. Once installed and enabled, configure Joomdle to use the selected e-commerce component:
   - Go to **Joomdle backend → Configuration → Shop**.

After configuration, you can access the **Shop** section in the Joomdle admin panel to enable the courses you want to sell.

![Shop Screenshot](File:Shop.png)

## Course Listing

The listing shows all Moodle courses. You only need to publish them to automatically create the corresponding products in your shop.

Product details are taken from Moodle:

- Name  
- Description  
- Price  
- Images  

You can modify these values by editing the product in the shop.

## Categories

Products are placed into the category set in Joomdle configuration.

- You can add them to new categories.
- You cannot remove them from the original category, as Joomdle uses it to identify which products are courses.
- You may unpublish this original category so it does not appear on the frontend.

## Available Controls

You can use the available controls to:

- **Unpublish** – Sets the product as unpublished in the shop.
- **Reload from Moodle** – Reloads name, description, and price from Moodle.
- **Trash** – Deletes the product from the shop.


## Bundles

With Joomdle, you can create **bundle products** that contain several courses. This allows you to offer one product in the shop that enrolls the buyer in multiple courses upon purchase.

To create a new bundle:

- Click on **"New bundle"** in the toolbar at **Joomdle → Shop**.

### Bundle Configuration

When creating a bundle, you can:

- Set the product name
- Add a description
- Set the price
- Select which courses will be included

