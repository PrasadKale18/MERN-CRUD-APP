const express = require('express');
const userModel = require('../model/schema');

const app = {
    save: async (fname,lname,email,password) => {
        return await userModel.create({fname,lname,email,password});
    },

    getCollection: async(id)=>{
        return await userModel.findById(id);
    },

    getAllCollection: async () => {
        return await userModel.find();
    },

    updateCollection: async (id, data) => {
        return await userModel.findByIdAndUpdate(id, data, { new: true });
    },

    deleteCollection: async(id)=>{
        return await userModel.findByIdAndDelete(id);
    }
}

module.exports = app;