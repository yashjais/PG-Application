const express = require('express')
const buildingController = require('../app/controller/buildingsController')

const roomController = require('../app/controller/roomsController')
const amenityController = require('../app/controller/amenitiesController')
const tenantController = require('../app/controller/tenantsController')
const reviewController = require('../app/controller/reviewsController')

const router = express.Router()

router.get('/buildings', buildingController.list)
router.get('/buildings/:id', buildingController.show)
router.post('/buildings', buildingController.create)
router.put('/buildings/:id', buildingController.update)
router.delete('/buildings/:id', buildingController.destroy)

router.get('/rooms', roomController.list)
router.get('/rooms/:id', roomController.show)
router.post('/rooms', roomController.create)
router.put('/rooms/:id', roomController.update)
router.delete('/rooms/:id', roomController.destroy)

router.get('/amenities', amenityController.list)
router.get('/amenities/:id', amenityController.show)
router.post('/amenities', amenityController.create)
router.put('/amenities/:id', amenityController.update) 
router.delete('/amenities/:id', amenityController.destroy)

router.get('/tenants', tenantController.list)
router.get('/tenants/:id', tenantController.show)
router.post('/tenants', tenantController.create)
router.put('/tenants/:id', tenantController.update)
router.delete('/tenants/:id', tenantController.destroy)

router.get('/reviews', reviewController.list)
router.get('/reviews/:id', reviewController.show)
router.post('/reviews', reviewController.create)
router.put('/reviews/:id', reviewController.update)
router.delete('/reviews/:id', reviewController.destroy)

module.exports = router