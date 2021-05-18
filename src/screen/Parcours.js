import './Parcours.css'

const Parcours = () => {
  return (
    <div>
      <div className='parcourContainer'>
        <div>
          <h1 className='titleParcours'>Expériences professionnelles</h1>
          <ul className='degreeList'>
            <li className='liparc'>
              Presque 1 An d'espérience en développement web
            </li>
            <li className='liparc'>
              7 Ans d`&apos;`expériance en Management en restauration rapide et
              grande distribution
            </li>
            <li className='liparc'>
              4 Ans d`&apos;`expérience en tant qu`&apos;`assistante
              administtative, comptable et commerciale
            </li>
          </ul>
        </div>
        <div>
          <h1 className='titleParcours'>Diplômes</h1>
          <ul className='degreeList'>
            <li className='lipro'>BOOTCAMP développeur web en 2020/2021</li>
            <li className='lipro'>Bac+3 gestion des PMI PME en 2007</li>
            <li className='lipro'>
              Bac+2 Langues étrangère appliquées en 2006
            </li>
            <li className='lipro'>Bac L mention Bien en 2004</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
export default Parcours
