$startstate = 1;
$finalstate[1] = 'true';
$finalstate[4] = 'true';
$finalstate[5] = 'true';
$edges[1] = [2,3];
$edges[2] = [4,5];
$edges[3] = [4,5];
$edges[4] = [2,3];
$edges[5] = [2,3];
$input[1][2]  = ['a'];
$output[1][2] = ['0'];
$input[1][3]  = ['a'];
$output[1][3] = ['1'];
$input[2][4]  = ['b'];
$output[2][4] = ['1'];
$input[2][5]  = ['b'];
$output[2][5] = ['0'];
$input[3][4]  = ['b'];
$output[3][4] = ['0'];
$input[3][5]  = ['b'];
$output[3][5] = ['1'];
$input[4][2]  = ['a'];
$output[4][2] = ['1'];
$input[4][3]  = ['a'];
$output[4][3] = ['0'];
$input[5][2]  = ['a'];
$output[5][2] = ['1'];
$input[5][3]  = ['a'];
$output[5][3] = ['0'];
