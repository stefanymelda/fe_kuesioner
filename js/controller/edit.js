export function isiData(results) {  
    const inputMapping = [
      { id: 'nama', path: 'biodata.nama' },
      { id: 'jenis_kelamin', path: 'biodata.jenis_kelamin' },
      { id: 'phone_number', path: 'biodata.phone_number' },
      { id: 'email', path: 'email' },
      { id: 'usia', path: 'biodata.usia' },
      { id: 'location', path: 'location' },
      { id: 'latitude', path: 'latitude' },
      { id: 'longitude', path: 'longitude' },
      { id: 'status', path: 'status' },
    ];
  
    inputMapping.forEach(({ id, path }) => {
      const inputElement = document.getElementById(id);
      const value = getNestedValue(results, path);
      inputElement.value = value;
    });
  }
  
  function getNestedValue(obj, path) {
    const value = path.split('.').reduce((value, key) => (value && value[key]) ? value[key] : '', obj);
    // console.log(`Value at path ${path}:`, value);
  
    // if (Array.isArray(value) && value.length > index && value[index].hasOwnProperty(property)) {
    //   return value[index][property];
    // }
  
    return value;
  }