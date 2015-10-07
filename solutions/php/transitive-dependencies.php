<?php

class DependenciesList
{
    //where the dependencies values are stored
    public $dependencies_matrix;

    public function __construct()
    {
        $this->dependencies_matrix = array();
    }

    public function add_direct($index, $dependencies)
    {
        $this->dependencies_matrix[$index] = explode(",", $dependencies);
    }

    public function dependencies_for($element)
    {
        //array where dependencies of the element parameter will be stored
        $dependents = array();
        //process get element dependencies
        $process = $this->dependencies_matrix[$element];

        while (!empty($process)) {

            //get an item from process
            $x = array_shift($process);

            //if x is not element itself, and is not in dependents array
            if ($x != $element && !in_array($x, $dependents)) {

                //put in dependents array
                $dependents[] = $x;

                //if x exists in dependencies_matrix
                if (array_key_exists($x, $this->dependencies_matrix)) {

                    //break the next dependencies list in strings
                    if (gettype($this->dependencies_matrix[$x]) == "array") {
                        foreach ($this->dependencies_matrix[$x] as $key => $value) {
                            array_push($process, $value);
                        }
                    }

                    else {
                        //put the x line in process
                        array_push($process, array_values($this->dependencies_matrix[$x]));
                    }
                }
            }
        }
        return $dependents;
    }
} //endclass
