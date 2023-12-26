// Звичайна (синхронна) функція, яка повертає значення
function synchronousFunction() {
    return 'Hello from synchronousFunction';
  }
  
  // Перетворення на асинхронну функцію
  async function asynchronousFunction() {
    // Додавання await перед викликом синхронної функції
    const result = await synchronousFunction();
    return result;
  }
  
  // Виклик асинхронної функції та використання .then блоку
  asynchronousFunction()
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  