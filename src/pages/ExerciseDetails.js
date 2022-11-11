import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom' 

import Details from '../components/Details'
import ExerciseVideos from '../components/ExerciseVideos'
import SimilarExercises from '../components/SimilarExercises'

import { exerciseOptions, youtubeOptions, fetchData } from '../utils/fetchData'

const ExerciseDetails = () => {
  const [exerciseDetail,setExerciseDetail] = useState({});
  const [execriseVideos, setExerciseVideos] = useState([]);
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
  const [equipmentExercises, setEquipmentExercise] = useState([])
  const { id } = useParams(); //this will give us the access to the id of the exercise which we looking for 
  
  useEffect(()=>{
    const fetchExercisesData = async () =>{
      const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
      const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';
      
      // now we hv URL we can make API call
      const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, exerciseOptions);
      setExerciseDetail(exerciseDetailData);

      const exerciseVideosData = await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailData.name}`, youtubeOptions);
      setExerciseVideos(exerciseVideosData.contents);

      const targetMuscleExercisesData = await fetchData(`${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`, exerciseOptions);
      setTargetMuscleExercises(targetMuscleExercisesData);
      
      const equipmentMuscleExercisesData = await fetchData(`${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`, exerciseOptions);
      setEquipmentExercise(equipmentMuscleExercisesData);
    }
    fetchExercisesData();
  },[id]);
  
  return (
    <div>
      <Details exerciseDetail={exerciseDetail}/>
      <ExerciseVideos execriseVideos={execriseVideos} name={exerciseDetail.name} />
      <SimilarExercises targetMuscleExercises={targetMuscleExercises} equipmentExercises={equipmentExercises} />
    </div>
  )
}

export default ExerciseDetails;
