# Transitive Dependencies

A class that calculates how dependencies propagate between things such as classes in a program. One of the insidious things about dependencies is that they are transitive—if A depends on B and B depends on C, then A also depends on C. So, this code that calculates the full set of dependencies for a group of items. Example class for test:

```php

<?php

require_once 'transitive-dependencies.php';

 class Dependencies_Test {

     public $dependencies;

     public function __construct() {
         $this->dependencies = new DependenciesList();
     }

     public function add_direct_test() {
         $this->dependencies->add_direct('A', 'B,C');
          $this->dependencies->add_direct('B', 'C,E');
          $this->dependencies->add_direct('C', 'G');
          $this->dependencies->add_direct('D', 'A,F');
          $this->dependencies->add_direct('E', 'F');
         $this->dependencies->add_direct('F', 'H');
     }

 }

$test = new Dependencies_Test();
$test->add_direct_test();
$resultado = $test->dependencies->dependencies_for("A");

//print dependencies array in screen
var_dump($resultado);
