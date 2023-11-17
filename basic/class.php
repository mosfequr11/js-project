<?php


 	// Principle class
	class Animal{

		public $name;

		function set_name(){
			$this->name = $name;
		}

		function get_name(){
			return 'Animal Name: '.$this->name;
		}
	}

	// extends Principle class

	class Cat extends Animal
	{
		
		function __construct()
		{
			$this->name = 'This is the Cat';
		}
	}

	// extends Principle class

	class Lion extends Animal
	{
		function __construct()
		{
			$this->name ='This is the lion';
		}
	}
	// make a object of Cat
	$c = new Cat();
	echo '<br/>'.$c->get_name();
	// make a object of Lion
	$l = new Lion();
	echo '</br>' .$l->get_name();

	echo "<hr>";

    echo "<h3>This is the Second Section</h3><br>";
	class Bird{

		public $animal_name;

		function set_name($animal_name){
			$this->mosfequr = $animal_name;
		}

		function get_name(){
			return 'Bird Name: '.$this->mosfequr;
		}
	}
	// make a object of Animal
	$b = new Bird();

	$b->set_name('Parot');
	echo $b->get_name();

	$b->set_name('Doel');
	echo '<br/>'.$b->get_name();

	$b->set_name('Crow');
	echo '<br/>'.$b->get_name();
	
	

