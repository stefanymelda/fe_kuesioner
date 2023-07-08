export function isiData(results) {  
    const inputMapping = [
      { id: 'kode', path: 'kode' },
      { id: 'title', path: 'title' },
      { id: 'nomor', path: 'soal.nomor' },
      { id: 'text', path: 'soal.text' },
      { id: 'options', path: 'soal.options' },
    ];
  
    inputMapping.forEach(({ id, path, index, property }) => {
      const inputElement = document.getElementById(id);
      const value = getNestedValue(results, path, index, property);
      inputElement.value = value;
    });
  }
  
  function getNestedValue(obj, path, index, property) {
    const value = path.split('.').reduce((value, key) => (value && value[key]) ? value[key] : '', obj);
    // console.log(`Value at path ${path}:`, value);
  
    if (Array.isArray(value) && value.length > index && value[index].hasOwnProperty(property)) {
      return value[index][property];
    }
  
    return value;
  }