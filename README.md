#jstable

jstable создан для быстрого создания таблиц с редактируемыми ячейками, и получения данных в удобном формате двумерного массива.

##API

| Метод  | Описание |
| ------ | --- |
| jstable.create(idelem, rows, cols[, options]) | Создает экземпляр таблицы. Где **idelem** - id элемента, **rows** - количество строк, **cols** - количество столбцов, **options.type** - значения могут быть input\|text, если input то создаются поля ввода, если text то выводится просто текст см. options.values, **options.values** - заранее заданные значения в виде двумерного массива соответствующий ячейкам таблицы,  **options.titleCols** - заголовки столбцов, **options.titleRows** - заголовки строк. Возвращает экземпляр **instanceTable**. |
| instanceTable::change(row, col, value) | Изменяет возвращаемые данные таблицы. Не изменяет данные в HTML таблице! **cols** - столбец (начиная с 0), **rows** -  строка (начиная с 0) value|
| instanceTable::getData() | Получает данные из таблицы в виде двумерного массива |
| instanceTable::delete() | Удаляет таблицу |

##Как использовать

Создаем таблицу 3х3 и помещаем её в #container:
```html
<div id="container"></div>
<script>
  tableInst = jstable.create('container', 3,3);
</script>
```
После редактирования значений в таблице мы может их получить:
```html
<script>
  tableInst.getData();
</script>
```
