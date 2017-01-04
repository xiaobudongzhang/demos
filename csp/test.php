<?php
	$x=var_export(file_get_contents('php://input'));
	file_put_contents('./tmpdata',file_get_contents('php://input'),LOCK_EX);
