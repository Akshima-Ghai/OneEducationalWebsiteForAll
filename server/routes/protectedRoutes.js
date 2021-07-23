const express = require('express');
const protectedRouter = express.Router();
const { studentContact, teacherContact } = require('./../controllers/user');
const { authenticate } = require("./../middlewares/auth");

//Tags
/**
 * @swagger
 * tags: 
 *    name: Protected
 *    description: user contact managing API
 * 
 */

/**
 * @swagger
 * /student-contact:
 *  post:
 *     description: student contact route
 *     tags: [Protected]
 *     requestBody:
 *        required: true
 *        content: 
 *            application/json: 
 *                schema:
 *                    type: object  
 *                    properties:
 *                          name: 
 *                              type: string
 *                              description: name entered by student
 *                          email: 
 *                              type: string 
 *                              description: email entered by student
 *                          message: 
 *                              type: string
 *                              description: message entered by student
 *                          
 *     responses:
 *        '200':
 *            summary: Message has been saved and and emails have been sent successfully
 *            content:
 *               application/json:
 *                   schema: 
 *                      type: object  
 *                      properties:
 *                            msg: 
 *                               type: string
 *                               description: success message if meassege saved and emails sent
 *        '401': 
 *           summary: Student not found with this email
 *           content:
 *               application/json:        
 *                    schema: 
 *                       type: object  
 *                       properties:
 *                             error: 
 *                                 type: string
 *                                 description: error message for student not found with this email
 *        '500':
 *            summary: Internal Error / No student found having id associated with email
 *            content:
 *               application/json:        
 *                    schema: 
 *                       type: object  
 *                       properties:
 *                             error: 
 *                                 type: string
 *                                 description: error message for Internal error / Student not found with id 
 */
 protectedRouter.post('/student-contact', studentContact);

 /**
  * @swagger
  * /teacher-contact:
  *  post:
  *     description: teacher contact route
  *     tags: [Protected]
  *     requestBody:
  *        required: true
  *        content: 
  *            application/json: 
  *                schema:
  *                    type: object  
  *                    properties:
  *                          name: 
  *                              type: string
  *                              description: name entered by teacher
  *                          email: 
  *                              type: string 
  *                              description: email entered by teacher
  *                          message: 
  *                              type: string
  *                              description: message entered by teacher
  *                          
  *     responses:
  *        '200':
  *            summary: Message has been saved and and emails have been sent successfully
  *            content:
  *               application/json:
  *                   schema: 
  *                      type: object  
  *                      properties:
  *                            msg: 
  *                               type: string
  *                               description: success message if meassege saved and emails sent
  *        '401': 
  *           summary: teacher not found with this email
  *           content:
  *               application/json:        
  *                    schema: 
  *                       type: object  
  *                       properties:
  *                             error: 
  *                                 type: string
  *                                 description: error message for Teacher not found with this email
  *        '500':
  *            summary: Internal Error / No Teacher found having id associated with email
  *            content:
  *               application/json:        
  *                    schema: 
  *                       type: object  
  *                       properties:
  *                             error: 
  *                                 type: string
  *                                 description: error message for Internal error / Teacher not found with id 
  */
  protectedRouter.post('/teacher-contact', teacherContact);

  module.exports = protectedRouter;
  