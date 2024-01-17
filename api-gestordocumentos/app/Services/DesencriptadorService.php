<?php
namespace App\Services;

class DesencriptadorService
{
    function desencriptar($cadenaEncriptada)
    {
        $numFilas = 4;
        $numElementosMatriz = pow($numFilas, 2);
        $longitudCadena = strlen($cadenaEncriptada);
        $numMatriz = ceil($longitudCadena / $numElementosMatriz);
        $matrizClave4x4 = $this->matrizClave4x4();
        $matricesXOR = $this->descomponerCaractesEncriptados($cadenaEncriptada, $numMatriz, $numFilas, $numElementosMatriz, $longitudCadena);
        $matricesAHexDesencriptadas = $this->desencriptarMatrizXOR($matricesXOR, $numFilas, $matrizClave4x4, $numMatriz, $longitudCadena);
        $cadenaDesencriptada = $this->generarNuevaCadena($matricesAHexDesencriptadas, $numMatriz, $numFilas, $longitudCadena);
        return $cadenaDesencriptada;
    }
    function descomponerCaractesEncriptados($cadena, $numMatriz, $numFilas, $numElementosMatriz, $longitudCadena)
    {
        $numCaracteresRec = 0;
        $matrices = array();
        for ($i = 0; $i < $numMatriz; $i++) {
            $matriz = array();
            for ($cols = 0; $cols < $numFilas; $cols++) {
                for ($rows = 0; $rows < $numFilas; $rows++) {
                    if ($longitudCadena > 0) {
                        $caracter = $cadena[$numCaracteresRec];
                        $matriz[$rows][$cols] = $caracter;
                        $longitudCadena--;
                        $numCaracteresRec++;
                    }
                }
            }
            $matrices[] = $matriz;
        }
        return $matrices;
    }

    function desencriptarMatrizXOR($matricesXOR, $numFilas, $matrizClave4x4, $numMatriz, $longitudCadena)
    {
        $numCaracteresRec = 0;
        $matrices = array();
        for ($i = 0; $i < $numMatriz; $i++) {
            $matriz = array();
            for ($cols = 0; $cols < $numFilas; $cols++) {
                for ($rows = 0; $rows < $numFilas; $rows++) {
                    if ($longitudCadena > 0) {
                        $caracterMatXOR = $matricesXOR[$i][$rows][$cols];
                        $caracterMatClave4x4 = $matrizClave4x4[$rows][$cols];
                        $binMatXOR = str_pad(decbin(ord($caracterMatXOR)), 8, '0', STR_PAD_LEFT);
                        $binMatClave4x4 = str_pad(decbin(hexdec($caracterMatClave4x4)), 8, '0', STR_PAD_LEFT);
                        $resultadoXOR = '';
                        for ($j = 0; $j < 8; $j++) {
                            $bin1 = $binMatXOR[$j];
                            $bin2 = $binMatClave4x4[$j];
                            if ($bin1 == $bin2) {
                                $resultadoXOR .= '0';
                            } else {
                                $resultadoXOR .= '1';
                            }
                        }
                        $hexadecimal = base_convert($resultadoXOR, 2, 16);
                        $caracterAscii = chr(hexdec($hexadecimal));
                        $matriz[$rows][$cols] = $caracterAscii;
                        $longitudCadena--;
                        $numCaracteresRec++;
                    }
                }
            }
            $matrices[] = $matriz;
        }
        return $matrices;
    }
    function matrizClave4x4()
    {
        $matriz = array(
            array('21', '21', '22', '22'),
            array('23', '23', '24', '24'),
            array('25', '25', '26', '26'),
            array('27', '27', '28', '28')
        );
        return $matriz;
    }
    function generarNuevaCadena($matrices, $numMatriz, $numFilas, $longitudCadena)
    {
        $cadenaNueva = '';
        for ($i = 0; $i < $numMatriz; $i++) {
            for ($cols = 0; $cols < $numFilas; $cols++) {
                for ($rows = 0; $rows < $numFilas; $rows++) {
                    if ($longitudCadena > 0) {
                        $caracter = $matrices[$i][$rows][$cols];
                        $cadenaNueva .= $caracter;
                        $longitudCadena--;
                    }
                }
            }
        }
        return $cadenaNueva;
    }
}

?>