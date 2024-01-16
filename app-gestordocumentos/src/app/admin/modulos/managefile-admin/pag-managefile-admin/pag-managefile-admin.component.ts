import { Component } from '@angular/core';
import { ManagefileService } from 'src/app/servicios/api/managefile.service';

@Component({
  selector: 'app-pag-managefile-admin',
  templateUrl: './pag-managefile-admin.component.html',
  styleUrls: ['./pag-managefile-admin.component.css']
})
export class PagManagefileAdminComponent {
  archivos: any;
  nuevoArchivo: any;
  nombreArchivo: any
  facultades: any
  selectedFacultad: any
  carreras: any
  selectedCarrera: any
  estudiantes: any
  selectedEstudiante: any
  plantillas: any
  selectedPlantilla: any
  carpetas: any
  selectedCarpeta: any
  vistaArchivo: boolean = false
  cargaArchivo: boolean = false
  descargaArchivo: boolean = false
  eliminaArchivo: boolean = false
  listaArchivos: any
  selectedArchivo: any
  idSecretaria: any = localStorage.getItem('dato')


  constructor(private managefileService: ManagefileService) { }

  ngOnInit(): void {
    this.obtenerArchivos();
    this.getFacultades()
  }

  obtenerArchivos(): void {
    this.managefileService.obtenerArchivos().subscribe(
      response => {
        console.log(response);

        this.archivos = response.archivos;
      },
      error => {
        console.error('Error al obtener archivos:', error);
      }
    );
  }
  onArchivoSeleccionado(event: any): void {
    this.nuevoArchivo = event.target.files[0];
    console.log(this.nuevoArchivo);

  }

  subirArchivo(): void {
    if (this.nuevoArchivo) {
      const formData = new FormData();
      formData.append('NombreArchivo', this.nuevoArchivo.name);
      formData.append('Archivo', this.nuevoArchivo);
      formData.append('IdStudent', this.selectedEstudiante.Id);
      formData.append('IdTemplateDet', this.selectedCarpeta.IdTemplateDet);
      formData.append('IdUser', this.idSecretaria);
      this.managefileService.subirArchivo(formData).subscribe(
        response => {
          console.log('Archivo subido exitosamente:', response);
          this.obtenerArchivos(); // Actualizar la lista después de subir el archivo
        },
        error => {
          console.error('Error al subir el archivo:', error);
        }
      );
    } else {
      console.warn('Selecciona un archivo antes de intentar subirlo.');
    }
    this.verArchivos(this.selectedCarpeta)
  }
  descargarArchivo(id: number): void {
    this.managefileService.descargarArchivo(id).subscribe(
      response => {
        console.log(response);
        const blob = new Blob([response], { type: 'application/pdf' });
        //const url = window.URL.createObjectURL(blob);
        const viewerUrl = window.URL.createObjectURL(blob);
        window.open(viewerUrl, '_blank');
        //window.open(url);
      },
      error => {
        console.error('Error al descargar el archivo:', error);
      }
    );
  }

  eliminarArchivo(id: number): void {
    this.managefileService.eliminarArchivo(id).subscribe(
      response => {
        console.log('Archivo eliminado exitosamente:', response);
        this.obtenerArchivos(); // Actualizar la lista después de eliminar el archivo
      },
      error => {
        console.error('Error al eliminar el archivo:', error);
      }
    );
    this.verArchivos(this.selectedCarpeta)
  }
  getFacultades() {
    this.managefileService.getFacultiesByIdSecretary(this.idSecretaria).subscribe(result => {
      this.facultades = result
    })
  }
  obtenerCarreras() {
    this.managefileService.getCarrersBySecretaryFaculty(this.idSecretaria, this.selectedFacultad.Id).subscribe(result => {
      this.carreras = result
    })
  }
  obtenerEstudiantes() {
    this.managefileService.getStudentByCarrers(this.selectedCarrera.Id).subscribe(result => {
      this.estudiantes = result
    })
  }
  gestionarArchivos(row: any) {
    this.selectedEstudiante = row
    this.managefileService.getTemplatesBySecretaryCareer(this.idSecretaria, this.selectedCarrera.Id).subscribe(result => {
      this.plantillas = result
    })
  }
  verCarpetas(row: any) {
    this.selectedPlantilla = row
    this.managefileService.getTemplateDetBySecretaryTemplate(this.idSecretaria, this.selectedPlantilla.Id).subscribe(result => {
      this.carpetas = result
      console.log(this.carpetas);

    })
  }
  verArchivos(row: any) {
    this.selectedCarpeta = row
    this.vistaArchivo = !!row.Vista
    this.cargaArchivo = !!row.Carga
    this.descargaArchivo = !!row.Descarga
    this.eliminaArchivo = !!row.Eliminado
    this.managefileService.getFilesByStudentFolder(this.selectedEstudiante.Id, this.selectedCarpeta.IdTemplateDet).subscribe(result => {
      this.listaArchivos = result
      console.log('selectedCarpeta');

      console.log(this.selectedCarpeta);


    })
  }

}
