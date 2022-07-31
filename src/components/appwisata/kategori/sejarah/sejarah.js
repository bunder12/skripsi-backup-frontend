import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowBack } from '@material-ui/icons'
import Rating from '@mui/material/Rating'
import axios from 'axios'
import { Button, Container } from '@mui/material'
import { Typography } from '@material-ui/core'

const Sejarah = ({onDetail, dataUser}) => {

    const [data, setData] = useState([])
    const [ratingValue, setRatingValue] = useState(0);

    const getData = async () => {
        const respon = await axios.get(`http://localhost:5000/admin/getDataWisata`)
        setData(respon.data.data);
    }

      useEffect(() => {
        getData();
      }, [])

  return (
    <div className='bg-gray-100 dark:bg-gray-900 pb-12'>
    <Container>
    <Button component={Link} to="/">
      <ArrowBack style={{fontSize: '47px', color: 'black'}}/>
    </Button>
    <div className='mb-16 mt-6'>
      <Typography style={{fontWeight: 'bold', display: 'flex', flexDirection: 'column'}} variant='h3'>Kategori <span>Sejarah</span></Typography>
      <Typography variant='subtitle1'>Coba jelajahi destinasi dengan kategori sejarah</Typography>
    {/* <h1 className='text-5xl font-semibold dark:text-gray-100 flex flex-col mb-2'>Kategori <span className=''>Sejarah</span></h1>
    <p>Coba jelajahi destinasi dengan kategori sejarah</p> */}
    </div>
    <div className='grid bg-gray-100 dark:bg-gray-900 sm:grid-cols-2 gap-12 md:grid-cols-3 lg:grid-cols-4'>
    {data.map( datas=> (
      <>
      {
        datas.kategori_id == "6294d5d9e57bf79a3c2982e2" && (
            <div className='relative h-[360px]'>
                <img src={`http://localhost:5000/admin/getSingleImage/${datas.gambar}`} alt='wisata' className=' w-full h-[80%] rounded-md scale-100 hover:scale-[1.05] hover:ease-in-out hover:duration-700 duration-700'/>
                <div className='cursor-pointer opacity-80 absolute top-4 right-4 bg-slate-50 rounded-md px-3 py-2'>
                  <span className='text-xl'>
                    <ion-icon name="heart"/>
                  </span>
                </div>
                <div className='bg-white dark:bg-gray-800 dark:text-gray-200 absolute bottom-0 left-[18px] rounded-xl w-[88%] p-4 shadow-2xl flex flex-col items-center'>
                    <h2 className='text-2xl'>{datas.wisata}</h2>
                    <span className='flex items-center'>
                      <Rating
                      readOnly
                      name="Rating Label"
                      value={datas.totalRating}
                      precision={0.5}
                        // name="Rating Label"
                        // value={ratingValue}
                        // onChange={(event, newValue) => {
                        //   setRatingValue(newValue);
                        // }}
                      />
                      <p className='ml-2 text-xl font-semibold'>{datas.totalRating}</p>
                    </span>
                    <p className='text-gray-500'>(16 review)</p>
                    <Button fullWidth variant='contained' onClick={() => onDetail(datas._id, dataUser)}  component={Link} to="/detail" color='primary'>Detail</Button>
                </div>
            </div>
        )
               }
               </>
    ))}
    </div>
    </Container>
</div>
  )
}

export default Sejarah