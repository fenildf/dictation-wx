import React from 'react';
import MainLayout from '../components/MainLayout/MainLayout';
import Exam from '../components/Exam';

const ExamPage = ({ history }) => (
  <MainLayout history={history}>
    <Exam />
  </MainLayout>
);

export default ExamPage;
