const dataTypes = [
    false,
    's',
    0,
    null,
    undefined,
    {},
    [],
    10n,
    () => {},
    Symbol (),
]

for (let i = 0; i < dataTypes.length; i++) {
    console.log('Значение: ', (dataTypes[i]));
    console.log ('Тип: ', typeof(dataTypes[i]));
    console.log ('Пребразование к строке:', String(dataTypes[i]));
    console.log ('Преобразование к числу: ', Number (dataTypes[i]));
    console.log ('Преобразование к булевому типу: ', Boolean (dataTypes[i]));
};   