#!/usr/bin/env bash
# Levanta la página compilada y verifica que cada sección muestre textos que vienen de /content.
set -u
npx next start -p 3123 > /tmp/next.log 2>&1 &
for i in $(seq 1 30); do curl -s -o /dev/null http://localhost:3123/ && break; sleep 1; done

fallas=0
revisar() { # ruta, texto esperado
  if curl -s "http://localhost:3123$1" | grep -qF -- "$2"; then echo "OK   $1 → $2"; else echo "FALTA $1 → $2"; fallas=$((fallas+1)); fi
}
revisar / "Ginecología y Medicina Legal"
revisar / "Diagnóstico preciso, tratamiento oportuno"
revisar / "Indicación de punciones y biopsias."
revisar / "Trayectoria y Compromiso"
revisar /especialidades "Patología Mamaria (Mastología)"
revisar /especialidades "Screening de los cánceres más frecuentes."
revisar /especialidades "tomosíntesis"
revisar /sobre-mi "Universidad Hospital Italiano"
revisar /sobre-mi "Coordinador de la Residencia de Patología Mamaria"
revisar /sobre-mi "escucha activa y atención personalizada"
revisar /sobre-mi "Más de 20 premios"
revisar /faq "¿Cómo me preparo para una cirugía?"
revisar /faq "8 horas de ayuno"
revisar /faq "hospitalposadas.gob.ar"
revisar /contacto "Rosario 130, 1º piso, Dto. 4"
revisar /contacto "consultoriostigliano@gmail.com"
revisar /contacto "Consulta de mastología"
revisar / "doctorstigliano"
codigo_admin=$(curl -s -o /dev/null -w "%{http_code}" http://localhost:3123/admin/index.html)
if [ "$codigo_admin" = "200" ]; then echo "OK   /admin/index.html (200)"; else echo "FALTA /admin/index.html ($codigo_admin)"; fallas=$((fallas+1)); fi
echo "FALLAS=$fallas"
