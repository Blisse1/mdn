#!/bin/bash

cantidad_archivos=4

for ((i=1; i<=$cantidad_archivos; i++))
do
    nombre_archivo="verse${i}.txt"
    touch "$nombre_archivo"
done

