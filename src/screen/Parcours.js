import './Parcours.css'

const Parcours = () => {
  return (
    <div>
      <div className='parcourContainer'>
        <div>
          <h1 className='titleParcours'>Expériences professionnelles</h1>
          <ul className='degreeList'>
            <li className='liparc'></li>
            <li className='liparc'></li>
            <li className='liparc'></li>
            <li className='liparc'></li>
          </ul>
        </div>
        <div>
          <h1 className='titleParcours'>Diplômes</h1>
          <ul className='degreeList'>
            <li className='lipro'>BOOTCAMP développeur web en 2020/2021</li>
            <li className='lipro'>DEES gestion des PMI PME en 2007</li>
            <li className='lipro'>DEUG Langues étrangère appliquées en 2006</li>
            <li className='lipro'>Bac L mention Bien en 2004</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
export default Parcours
