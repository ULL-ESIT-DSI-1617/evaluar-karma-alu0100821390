var assert = chai.assert;

suite('temperature converter', function() {
	setup(function() {
		if (typeof __html__ !== 'undefined') {
			document.body.innerHTML = __html__['tests/index.html'];
			original = document.getElementById('original');
			converted = document.getElementById('converted');
		}
	});
 
    test('32F to C = 0C', function() {
        original.value = "32F to C";
        main();
        assert.deepEqual(converted, "0.0 Celsius");
    });
    test('45C to F = 113.0 Fahrenheit', function() {
        original.value = "45C to F";
        main();
        assert.deepEqual(converted, "113.0 Fahrenheit");
    });
	test('23k to C = -250.0 Celsius', function() {
        original.value = "23k to C";
        main();
        assert.deepEqual(converted, "-250.0 Celsius");
    });
    test('32i to m = 0.8 Meters', function() {
        original.value = "32i to m";
        main();
        assert.deepEqual(converted, "0.8 Meters");
    });
    test('32M to I = 1259.8 Inches', function() {
        original.value = "32M to I";
        main();
        assert.deepEqual(converted, "1259.8 Inches");
    });
});
