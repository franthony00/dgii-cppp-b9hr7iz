import Image from "next/image"

export default function DGIIValidationPage() {
  const vehicleData = {
    codigo: "sextd5r",
    placa: "PP112103",
    tipoVehiculo: "JEEP",
    marca: "MERCEDEZ BENZ",
    modelo: "GLE",
    color: "BLANCO",
    year: "2022",
    chasis: "4JGFD6BB0SB293210",
    fechaExpiracion: "01/02/2026",
  }

  return (
    <div className="min-h-screen bg-white p-2">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <header className="mt-1 bg-[#7daf18] px-[4.5%] py-[4.5%] border-b-[1em] border-[#2d2d2d]">
          <Image
            src="/p.png"
            alt="Placa Provisional"
            width={450}
            height={100}
            className="w-[45%] max-w-[450px] h-auto"
            priority
          />
        </header>

        {/* Title Section */}
        <div className="px-[5%] py-[5%]">
          <h1 className="text-[#d58f00] text-[3em] font-bold leading-tight mb-2 max-md:text-[1.6em]">
            Sistema Datamatrix
          </h1>
          <h2 className="text-[#4b8101] text-[4em] font-bold leading-tight max-md:text-[1.9em]">
            Validación de Documentos
          </h2>
        </div>

        {/* Content Table */}
        <div className="px-[5%] pb-[5%] text-[3em] max-md:text-[1.7em]">
          <table className="w-full border-collapse font-sans">
            <tbody>
              <tr className="border-b border-[#cccccc]">
                <td className="bg-[#efefef] w-[37%] py-[39px] px-5 align-middle text-black max-md:py-[20px] max-md:px-3">
                  Código
                </td>
                <td className="w-[65%] py-[35px] px-5 align-middle text-[#676767] max-md:py-[20px] max-md:px-3">
                  {vehicleData.codigo}
                </td>
              </tr>

              <tr className="border-b border-[#cccccc]">
                <td className="bg-[#efefef] w-[37%] py-[39px] px-5 align-middle text-black max-md:py-[20px] max-md:px-3">
                  Placa
                </td>
                <td className="w-[65%] py-[35px] px-5 align-middle text-[#676767] max-md:py-[20px] max-md:px-3">
                  {vehicleData.placa}
                </td>
              </tr>

              <tr className="border-b border-[#cccccc]">
                <td className="bg-[#efefef] w-[37%] py-[39px] px-5 align-middle text-black max-md:py-[20px] max-md:px-3">
                  Tipo de Vehículo
                </td>
                <td className="w-[65%] py-[35px] px-5 align-middle text-[#676767] max-md:py-[20px] max-md:px-3">
                  {vehicleData.tipoVehiculo}
                </td>
              </tr>

              <tr className="border-b border-[#cccccc]">
                <td className="bg-[#efefef] w-[37%] py-[39px] px-5 align-middle text-black max-md:py-[20px] max-md:px-3">
                  Marca
                </td>
                <td className="w-[65%] py-[35px] px-5 align-middle text-[#676767] max-md:py-[20px] max-md:px-3">
                  {vehicleData.marca}
                </td>
              </tr>

              <tr className="border-b border-[#cccccc]">
                <td className="bg-[#efefef] w-[37%] py-[39px] px-5 align-middle text-black max-md:py-[20px] max-md:px-3">
                  Modelo
                </td>
                <td className="w-[65%] py-[35px] px-5 align-middle text-[#676767] max-md:py-[20px] max-md:px-3">
                  {vehicleData.modelo}
                </td>
              </tr>

              <tr className="border-b border-[#cccccc]">
                <td className="bg-[#efefef] w-[37%] py-[39px] px-5 align-middle text-black max-md:py-[20px] max-md:px-3">
                  Color
                </td>
                <td className="w-[65%] py-[35px] px-5 align-middle text-[#676767] max-md:py-[20px] max-md:px-3">
                  {vehicleData.color}
                </td>
              </tr>

              <tr className="border-b border-[#cccccc]">
                <td className="bg-[#efefef] w-[37%] py-[39px] px-5 align-middle text-black max-md:py-[20px] max-md:px-3">
                  Año
                </td>
                <td className="w-[65%] py-[35px] px-5 align-middle text-[#676767] max-md:py-[20px] max-md:px-3">
                  {vehicleData.year}
                </td>
              </tr>

              <tr className="border-b border-[#cccccc]">
                <td className="bg-[#efefef] w-[37%] py-[39px] px-5 align-middle text-black max-md:py-[20px] max-md:px-3">
                  Chasis
                </td>
                <td className="w-[65%] py-[35px] px-5 align-middle text-[#676767] max-md:py-[20px] max-md:px-3">
                  {vehicleData.chasis}
                </td>
              </tr>

              <tr className="border-b border-[#cccccc]">
                <td className="bg-[#efefef] w-[37%] py-[39px] px-5 align-middle text-black max-md:py-[20px] max-md:px-3">
                  Fecha Expiración
                </td>
                <td className="w-[65%] py-[35px] px-5 align-middle text-[#676767] max-md:py-[20px] max-md:px-3">
                  {vehicleData.fechaExpiracion}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <footer className="px-[5%] py-[5%] bg-[#cfcfcf] text-[#3a3a3a] text-[2.5em] text-left max-md:text-[1.6em]">
          Dirección General de Impuestos Internos.
        </footer>
      </div>
    </div>
  )
}
