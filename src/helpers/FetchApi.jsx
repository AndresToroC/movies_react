import Swal from "sweetalert2";

const api_url = import.meta.env.VITE_API_URL;
const api_key = import.meta.env.VITE_API_KEY;

// Configuracion de fetch general
export const FetchApi = async(url, page = null, query = null) => {
  const params = new URLSearchParams({
    api_key,
    language: 'es-ES'
  });

  if (page) {
    params.append('page', page);
  }

  if (query) {
    params.append('query', query);
  }
  
  const res = await fetch(`${ api_url }${ url }?${ params.toString() }`);
  const data = await res.json();

  if (res.status == 200) {
    return data;
  } else {
    Swal.fire({
      title: 'Error!',
      text: 'Ah ocurrido un error',
      icon: 'error',
      confirmButtonText: 'Ok'
    });

    return false;
  }
}