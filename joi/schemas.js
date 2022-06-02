import Joi from 'joi';


export const projectCreate = Joi.object({
    title: Joi.string().min(5).required().messages({
      'string.base': 'Title cannot be empty',
      'string.empty': 'Title cannot be empty',
      'string.null': 'Title cannot be empty',
      
    }),
    description: Joi.string().min(50).required(),
    url:Joi.string().uri().required().messages({
        'string.base': 'enter valid URL',
        'string.empty': 'enter valid URL',
        'string.null': 'enter valid URL',
      }),
  
  });

 //JOI is a schema validation library