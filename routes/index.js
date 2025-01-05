const router = require('express').Router();
const { resolve } = require('path');
const Reservation = require('../models/reservation')

router.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, '../pages/index.html'));
  // res.send('Welcome to the reservation system!');
})

router.get("/view/availability", (req, res) => {
  res.sendFile(resolve(__dirname, '../pages/availability.html'));
})

router.get("/view/book", (req, res) => {
  res.sendFile(resolve(__dirname, '../pages/book.html'));
})

router.get("/view/book_by_id", (req, res) => {
  res.sendFile(resolve(__dirname, '../pages/check_booking.html'));
})

router.get("/view/cancel_book_by_id", (req, res) => {
  res.sendFile(resolve(__dirname, '../pages/cancel_book.html'));
})

router.get('/bookings', async(req, res) => {
  try{
    const bookings = await Reservation.findAll();
    res.status(200).json(bookings);
  }catch(err){
    console.log(err);
    res.status(500).json({message: err.message});
  }
})

router.post('/bookings/available', async(req, res) => {

  try{

    const bookings = await Reservation.findAll({
      where: {
        Date: req.body.date
      }
    });

    if(bookings?.length === 0){
      res.status(200).json({
        availablility: true,
        message:`Available at ${req.body.date}`
      });
    }
    else{
      res.status(200).json({
      availablility: false,
      message:`Not Available at ${req.body.date}`
    });

    }

    
  }catch(err){
    console.log(err);
    res.status(500).json({message: err.message});
  }

  



})

router.post('/bookings/create', async(req, res) => {
  try{
    const booking = await Reservation.create(req.body);
    res.status(201).json(booking);
  }catch(err){
    console.log(err);
    res.status(400).json({message: err.message});
  }
})

router.get('/bookings/:id', async(req, res) => {
  try{
    const booking = await Reservation.findByPk(req.params.id);
    if(booking === null){
      res.status(404).json({message: 'Booking not found'});
    }else{
      res.status(200).json(booking);
    }
  }catch(err){
    res.status(500).json({message: err.message});
  }
})

router.delete('/bookings/:id', async(req, res) => {
  try{
    const booking = await Reservation.findByPk(req.params.id);
    if(booking === null){
      res.status(404).json({message: 'Booking not found'});
    }else{
      await booking.destroy();
      res.status(204).json({message: 'Booking deleted successfully'});
    }
  }catch(err){
    res.status(500).json({message: err.message});
  }
})

module.exports = router;