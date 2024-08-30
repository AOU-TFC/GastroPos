export function openDatabase() {
  // This function opens an IndexedDB database named "GastroPOS" with version 1.
  return new Promise((resolve, reject) => {
    const request = indexedDB.open("GastroPOS", 1);
    // Initiates the opening of an IndexedDB database. The second parameter is the version number.

    request.onupgradeneeded = function (e) {
      // This event is triggered if the database needs to be upgraded (e.g., when creating or modifying object stores).
      const db = e.target.result;
      // Access the database object from the event target.

      if (!db.objectStoreNames.contains("Categories")) {
        // Checks if the "Categories" object store does not already exist.
        const objectStore = db.createObjectStore("Categories", {
          keyPath: "Number",
        });
        // Creates a new object store named "Categories" with "Number" as the key path.
        objectStore.createIndex("Category", "Category", { unique: false });
        // Creates an index on the "Category" property to allow for efficient querying.
      }
    };

    request.onsuccess = function (e) {
      // This event is triggered when the database has been successfully opened.
      resolve(e.target.result);
      // Resolves the promise with the database object.
    };

    request.onerror = function (e) {
      // This event is triggered if there is an error opening the database.
      reject("Error opening DB");
      // Rejects the promise with an error message.
    };
  });
}

export async function storeCategories(categories) {
  // This function stores an array of categories in the IndexedDB database.
  try {
    const db = await openDatabase();
    // Opens the database and waits for it to be ready.

    return new Promise((resolve, reject) => {
      const transaction = db.transaction(["Categories"], "readwrite");
      // Creates a transaction for the "Categories" object store with read and write permissions.
      const objectStore = transaction.objectStore("Categories");
      // Accesses the "Categories" object store.

      categories.forEach((category) => {
        objectStore.put(category);
        // Adds or updates each category in the object store.
      });

      transaction.oncomplete = function () {
        // This event is triggered when the transaction is successfully completed.
        resolve("Category stored successfully");
        // Resolves the promise with a success message.
      };

      transaction.onerror = function () {
        // This event is triggered if there is an error during the transaction.
        reject("Error storing categories");
        // Rejects the promise with an error message.
      };
    });
  } catch (error) {
    throw new Error("error opening DB");
    // Throws an error if there was a problem opening the database.
  }
}

export async function getCategoriesFromDB() {
  // This function retrieves all categories from the IndexedDB database.
  try {
    const db = await openDatabase();
    // Opens the database and waits for it to be ready.

    return new Promise((resolve, reject) => {
      const transaction = db.transaction(["Categories"], "readonly");
      // Creates a transaction for the "Categories" object store with read-only permissions.
      const objectStore = transaction.objectStore("Categories");
      // Accesses the "Categories" object store.
      const categories = [];
      // Initializes an empty array to store the retrieved categories.

      objectStore.openCursor().onsuccess = function (e) {
        // This event is triggered when a cursor operation is successful.
        const cursor = e.target.result;
        // Accesses the cursor from the event target.

        if (cursor) {
          categories.push(cursor.value);
          // Adds the current cursor value to the categories array.
          cursor.continue();
          // Moves the cursor to the next record.
        } else {
          resolve(categories);
          // Resolves the promise with the array of categories when no more records are found.
        }
      };
    });
  } catch (error) {
    throw new Error("Error retrieving categories");
    // Throws an error if there was a problem retrieving the categories.
  }
}
