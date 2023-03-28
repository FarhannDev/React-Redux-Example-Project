import { Link, useRouteError } from "react-router-dom";

export default function PageNotFound() {
  let error = useRouteError();
  console.error(error);
  return (
    <>
      <div className="pageNotFound ">
        <div className="pageNotFoundTextContainer ">
          Opps.... <br /> Halaman tidak ditemukan <br />
          <Link to="/" className="btn btn-dark btn-lg rounded-pill mt-3">
            Kembali halaman utama
          </Link>
        </div>
      </div>
    </>
  );
}
