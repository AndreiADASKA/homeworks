import React, { Component } from 'react';
import './App.css';
import { Formik, Form, Field } from 'formik';

export default class Formikkk extends Component {
  render() {
    return (
      <Formik
        initialValues={{
          username: '',
          adults: '',
          children: '',
          dateIn: '',
          dateOut: '',
          smoker: 'некурящий',
          prepayment: false,
        }}
        onSubmit={(formValues) => alert(JSON.stringify(formValues))}
      >
        <Form>
          <div className="form">
            {/* {' '}  При формате prettier появляются эти скобки */}
            <div className="name-form">
              <label>Name</label>
              <Field name="username" />
            </div>
            <div className="number">
              <div>
                <label htmlFor="">Количество взрослых</label>
                <Field as="select" name="adults">
                  <option value="0">Отсутсвуют</option>
                  <option value="1">один</option>
                  <option value="2">два</option>
                  <option value="от 2х до 5">от двух до пяти</option>
                  <option value="5 и более">пять и более</option>
                </Field>
              </div>
              <div>
                <label htmlFor="">Количество детей</label>
                <Field as="select" name="children">
                  <option value="0">Отсутсвуют</option>
                  <option value="1">один</option>
                  <option value="2">два</option>
                  <option value="от 3х до 5">от трех до пяти</option>
                  <option value="5 и более">пять и более</option>
                </Field>
              </div>
            </div>

            <div className="date">
              <div>
                <label htmlFor="">Прибытие</label>
                <Field type="date" name="dateIn"></Field>
              </div>
              <div>
                <label htmlFor="">Выезд</label>
                <Field type="date" name="dateOut"></Field>
              </div>
            </div>

            <div className="smoke">
              <label>
                <Field type="radio" name="smoker" value="курящий" />
                Номер для курящих
              </label>
              <label>
                <Field type="radio" name="smoker" value="некурящий" />
                Номер для некурящих
              </label>
            </div>
            <div className="prepayment">
              <label>
                <Field type="checkbox" name="prepayment" />Я гарантирую предоплату
              </label>
            </div>
            <button type="submit">Отправить</button>
          </div>
        </Form>
      </Formik>
    );
  }
}
