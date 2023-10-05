// --------- Задание 3 --------- //
// Реализовать класс Employee, описывающий работника, и создать массив работников банка.
// Реализовать класс EmpTable для генерации html кода таблицы 
// со списком работников банка. Массив работников необходимо 
// передавать через конструктор, а получать html код с помощью 
// метода getHtml().
// Создать объект класса EmpTable и вывести на экран результат 
// работы метода getHtml().
// var employees = [
//   { name: "Иванов Иван", position: "Менеджер" },
//   { name: "Петров Петр", position: "Кассир" },
//   { name: "Сидорова Анна", position: "Аналитик" }
// ];

// // Функция для генерации HTML-кода строк с данными о работниках
// function generateEmployeeRows() {
//   var rows = "";
//   for (var i = 0; i < employees.length; i++) {
//       var employee = employees[i];
//       rows += "<tr><td>" + employee.name + "</td><td>" + employee.position + "</td></tr>";
//   }
//   return rows;
// }

// // Вставляем сгенерированные строки в таблицу
// $("#employeeTable tbody").html(generateEmployeeRows());

// class Employee {
//         constructor(name, position) {
//             this.name = name;
//             this.position = position;
//         }
//     }

//     // Класс EmpTable генерирует HTML-код таблицы
//     class EmpTable {
//         constructor(employees) {
//             this.employees = employees;
//         }

//         getHtml() {
//             let html = "<table border='1'>";
//             html += "<tr><th>Имя</th><th>Должность</th></tr>";

//             for (let employee of this.employees) {
//                 html += `<tr><td>${employee.name}</td><td>${employee.position}</td></tr>`;
//             }

//             html += "</table>";
//             return html;
//         }
//     }

//     // Класс StyledEmpTable наследуется от EmpTable и добавляет стили
//     class StyledEmpTable extends EmpTable {
//         getStyles() {
//             return "<style>" +
//                    "table { width: 100%; border-collapse: collapse; }" +
//                    "th, td { padding: 8px; text-align: left; border-bottom: 1px solid #ddd; }" +
//                    "</style>";
//         }

//         getHtml() {
//             return this.getStyles() + super.getHtml();
//         }
//     }

//     // Создаем массив работников
//     const employees = [
//         new Employee("Иванов Иван", "Менеджер"),
//         new Employee("Петров Петр", "Кассир"),
//         new Employee("Сидорова Анна", "Аналитик")
//     ];

//     // Создаем объект StyledEmpTable
//     const styledTable = new StyledEmpTable(employees);

//     // Выводим результат работы метода getHtml() на страницу
//     document.write(styledTable.getHtml());

// --------- Задание 4 --------- //
// Реализовать класс StyledEmpTable, который наследуется от 
// класса EmpTable. Добавить метод getStyles(), который возвращает 
// строку со стилями для таблицы в тегах style. Переопределить 
// метод getHtml(), который добавляет стили к тому, что возвращает 
// метод getHtml() из родительского класса. 
// Создать объект класса StyledEmpTable и вывести на экран 
// результат работы метода getHtml().
class Employee {
  constructor(name, position) {
      this.name = name;
      this.position = position;
  }
}

// Класс EmpTable генерирует HTML-код таблицы
class EmpTable {
  constructor(employees) {
      this.employees = employees;
  }

  getHtml() {
      let html = "<table border='1'>";
      html += "<tr><th>Имя</th><th>Должность</th></tr>";

      for (let employee of this.employees) {
          html += `<tr><td>${employee.name}</td><td>${employee.position}</td></tr>`;
      }

      html += "</table>";
      return html;
  }
}

// Класс StyledEmpTable наследуется от EmpTable и добавляет стили
class StyledEmpTable extends EmpTable {
  getStyles() {
      return "<style>" +
             "table { width: 100%; border-collapse: collapse; }" +
             "th, td { padding: 8px; text-align: left; border-bottom: 1px solid #ddd; }" +
             "</style>";
  }

  getHtml() {
      return this.getStyles() + super.getHtml();
  }
}

// Создаем массив работников
const employees = [
  new Employee("Иванов Иван", "Менеджер"),
  new Employee("Петров Петр", "Кассир"),
  new Employee("Сидорова Анна", "Аналитик")
];

// Создаем объект StyledEmpTable
const styledTable = new StyledEmpTable(employees);

// Выводим результат работы метода getHtml() на страницу
document.write(styledTable.getHtml());





