module.exports = {

   autoCreatedAt: false,
	autoUpdatedAt: false,
   attributes: {

      name: {

         type: 'string',
         unique: true,
         required: true
      },
      group_id: {

         type: 'integer',
         defaultsTo: 0
      },
      account_id: {

         type: 'integer',
         required: true
      },
      level: {

         type: 'integer',
         required: true
      },
      vocation: {

         type: 'integer',
         required: true
      },
      health: {

         type: 'integer',
         required: true
      },
      healthmax: {

         type: 'integer',
         required: true
      },
      experience: {

         type: 'integer',
         required: true
      },
      lookbody: {

         type: 'integer',
      },
      lookfeet: {

         type: 'integer',
      },
      lookhead: {

         type: 'integer',
      },
      looklegs: {

         type: 'integer',
      },
      looktype: {

         type: 'integer',
      },
      lookaddons: {

         type: 'integer',
      },
      maglevel: {
         
         type: 'integer',
         required: true
      },
      mana: {

         type: 'integer',
         required: true
      },
      manamax: {

         type: 'integer',
         required: true
      },
      manaspent: {

         type: 'integer',
         defaultsTo: 0
      },
      soul: {

         type: 'integer',
         defaultsTo: 0
      },
      town_id: {

         type: 'integer',
         required: true
      },
      sex: {

         type: 'integer',
         required: true
      },
      balance: {

         type: 'integer',
         required: true
      }
   }
}
