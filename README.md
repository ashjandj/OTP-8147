Implement a "Wishlist" feature on the Product Listing Page (PLP) for the SuiteCommerce Advanced (SCA) website. This feature allows users to save products directly from the PLP, creating a seamless experience without needing to visit individual Product Detail Pages (PDPs).

Requirements:

Frontend Enhancements:

Add Wishlist Icon: Place a heart or "Add to Wishlist" icon next to each product on the PLP. The icon should change visually when an item is added or removed from the wishlist.

Hover & Tooltip: Display a tooltip when the user hovers over the icon, indicating "Add to Wishlist" or "Remove from Wishlist" based on the item's current status.

Success Message: Provide visual feedback (e.g., toast notification) when an item is successfully added to or removed from the wishlist.

Backend Integration:

User-Specific Wishlist Storage: Use NetSuite’s custom records or user session data to store wishlist items associated with each user account. Ensure that users who are logged in can access their wishlist across multiple sessions.

Anonymous Wishlist Functionality: For users not logged in, store wishlist data locally in the browser (e.g., cookies or local storage), which prompts users to log in or register to permanently save the list.

Sync Wishlist with PDP and Account Page: Ensure that the wishlist functionality on the PLP syncs with the PDP and the user's account page, where they can view or edit their full list.

Custom Script Logic:

Wishlist Button Event Handling: Create a JavaScript module to handle "Add to Wishlist" and "Remove from Wishlist" actions.

Ajax Integration: Use Ajax requests to update the wishlist asynchronously, allowing the user to interact with the wishlist without refreshing the PLP.

Error Handling: Implement error handling for cases where the wishlist update fails due to network or server issues.

Wishlist Management on User Account Page:

Ensure users can view and manage their wishlist under their account, with options to move items to the cart or remove them entirely.

Testing:

Functional Testing: Confirm that wishlist items are correctly added, removed, and displayed.

Cross-Device Compatibility: Verify that the wishlist feature is accessible and responsive on mobile and desktop devices.

Performance Testing: Ensure that adding items to the wishlist doesn’t impact PLP load times or overall performance.
 
