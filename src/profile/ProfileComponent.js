import React from 'react'
import PropType  from 'prop-types';
import "./component.css";

function ProfileComponent({obj, handel, children = "aucune image" }) {


  return (
    <div className='carte' >

      {children}
      <h1>{obj.FuullName}</h1>
      <p>{obj.bio}</p>
      <p>{obj.profession}</p>
      <button onClick={() => handel(obj.FuullName)}>clickme</button>

    </div>
  )
}
ProfileComponent.defaultProps = {
  obj: { FuullName: "anonyme", bio: "pas de bio", profession: "pas de profession" }
}
ProfileComponent.PropType = {
  obj: PropType.object

}



export default ProfileComponent;
