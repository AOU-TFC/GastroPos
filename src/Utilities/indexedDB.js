export function openDatabase() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open("GastroPOS", 1);
    request.onupgradeneeded = function (e) {
      const db = e.target.result;
      if (!db.objectStoreNames.contains("Categories")) {
        const objectStore = db.createObjectStore("Categories", {
          keyPath: "Number",
        });
        objectStore.createIndex("Category", "Category", { unique: false });
      }
    };
    request.onsuccess = function (e) {
      resolve(e.target.result);
    };
    request.onerror = function (e) {
      reject("Error opening DB");
    };
  });
}

export async function storeCategories(categories) {
  try {
    const db = await openDatabase();
    return new Promise((resolve, reject) => {
      const transaction = db.transaction(["Categories"], "readwrite");
      const objectStore = transaction.objectStore("Categories");
      categories.forEach((category) => {
        objectStore.put(category);
      });
      transaction.oncomplete = function () {
        resolve("Category stored successfully");
      };
      transaction.onerror = function () {
        reject("Error storing categories");
      };
    });
  } catch (error) {
    throw new Error("error opening DB");
  }
}

export async function getCategoriesFromDB() {
  try {
    const db = await openDatabase();
    return new Promise((resolve, reject) => {
      const transaction = db.transaction(["Categories"], "readonly");
      const objectStore = transaction.objectStore("Categories");
      const categories = [];

      objectStore.openCursor().onsuccess = function (e) {
        const cursor = e.target.result;
        if (cursor) {
          categories.push(cursor.value);
          cursor.continue();
        } else {
          resolve(categories);
        }
      };
    });
  } catch (error) {
    throw new Error("Error retrieving categories");
  }
}
