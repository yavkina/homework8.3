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
    console.log('Значение: ' + dataTypes[i]+'\nТип: ' + typeof(dataTypes[i]) + '\nПреобразование к числу: ' + Number (dataTypes[i]) + '\nПреобразование к строке: ' + String (dataTypes[i]) + '\nПреобразование к булевому типу: ' + Boolean (dataTypes[i])); 
}   