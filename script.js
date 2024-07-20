document.getElementById('studentForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const height = document.getElementById('height').value;
    const weight = document.getElementById('weight').value;
    const sugarLevel = document.getElementById('sugarLevel').value;

    const studentInfo = {
        name,
        age,
        height,
        weight,
        sugarLevel
    };

    console.log('Student Information:', studentInfo);
    
    // Here you can add the logic to check for any medical conditions based on the input values
});
