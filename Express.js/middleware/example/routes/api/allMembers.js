const express = require('express');
const router = express.Router();
const members = require('../../members');
const uuid = require('uuid');

router.get('/:id',(req,res) => {
    // some is similar to filter but gives true or false
    const found = members.some(item => item.id === parseInt(req.params.id));
    if(found){
        let selectedMember = members.filter(member => {
        if(member.id == req.params.id){
            return true
        }
        }) 
    res.json(selectedMember)
    } else {
        res.status(400).json({ msg: `No member with the id of ${req.params.id}`})
    }


})

router.get('/', (req,res)=> {
    res.json(members);
    
})
//create member
router.post('/',(req,res)=>{
    //res.send(req.body)
   const newMember = {
       id:uuid.v4(),
       name:req.body.name,
       email:req.body.email,
       status:req.body.status
   }
   //res.send(newMember)
    if(!newMember.name || !newMember.email){
        return res.status(400).json({msg : 'Please include a name and email'})
    }
   members.push(newMember);
   res.json(members);
})

// update a member
router.put('/:id',(req,res)=>{
    const found = members.some(item => item.id === parseInt(req.params.id));
    if(found){
        const updMember = req.body;
        members.forEach( member=>{

            if(member.id === parseInt(req.params.id)){
                member.name = updMember.name ? updMember.name : member.name;
                member.email = updMember.email ? updMember.email : member.email;
                member.status = updMember.status ? updMember.status : member.status;
                res.json({ msg : 'Member updated', member })

            }
        })

    }
    else{
        res.status(400).send({msg : ` No member with the id of ${req.params.id}`});
    }
})
//delete a member
router.delete('/:id',(req,res)=>{
    const found = members.some(item => item.id === parseInt(req.params.id));
    if(found){
        res.json({
            msg : 'Member deleted',
            members: members.filter((member)=>{
                if(member.id !== parseInt(req.params.id)){
                    return member;
                }
            })
        })
    }
    else {
        res.status(400).json({ msg: `No Member with the id of ${req.params.id}`})
    }
    // router.delete('/:id',(req,res)=>{
    //  const found = members.some(item => item.id === parseInt(req.params.id));
    //  if(found){
    //     members.forEach( (checkItem,index) => {
    //         if(checkItem.id === parseInt(req.params.id)){
    //             members.splice(index,1)
                // res.status(200).send({msg: 'Yepee we found the user ID', members})
            // }
    //     })
    // }else{
    //     res.status(400).send({msg: "<h3>Oh sorry!!! No Member was Found...</h3>"+req.params.id})
    // }


})
module.exports = router;


