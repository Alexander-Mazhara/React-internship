import React from "react";

import "./maincontainer.css";
import logo from "../img/logo-react.png";
import html from "../img/icon-html.png";
import css from "../img/icon-css.png";
import js from "../img/icon-nodejs.png";

const author = "Alexander Mazhara";

function Maincontainer() {
  return (
    <div className="main-container">
      <div className="project-container-header-nav">
        <div className="project-container-header-logo">
          <img src={logo} alt="" />
        </div>
        <div className="project-container-header-menu">
          <a href="#footer">
            <span className="header-menu-list"> author </span>
          </a>
          <a href="#html-css">
            <span className="header-menu-list"> html </span>
          </a>
          <a href="#html-css">
            <span className="header-menu-list"> css </span>
          </a>
          <a href="#git">
            <span className="header-menu-list"> git </span>
          </a>
        </div>
      </div>

      <div className="project-container-discript">
        <h1>My first project to React</h1>
        <p className="project-container-discript-p">
          React JavaScript - библиотека для создания пользовательских
          интерфейсов
        </p>
      </div>

      <div className="project-container-main-content">
        <h2 className="project-container-main-content-header">
          web technology
        </h2>

        <div className="container">
          <div className="row">
            <div className="col-sm">
              <div className="project-container-post-row" id="html-css">
                <div className="project-container-posts-row">
                  <img src={html} alt="" />
                  <h3 className="project-container-posts-header">HTML</h3>
                  <p className="project-container-posts-discr">
                    HyperText Markup Language — «язык гипертекстовой разметки» —
                    самый базовый строительный блок Веба.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-sm">
              <div className="project-container-posts-row">
                <img src={css} alt="" />
                <h3 className="project-container-posts-header">CSS</h3>
                <p className="project-container-posts-discr">
                  CSS – это формальный язык, служащий для описания оформления
                  внешнего вида документа, созданного с использованием языка
                  разметки (HTML, XHTML, XML).
                </p>
              </div>
            </div>
            <div className="col-sm">
              <div className="project-container-posts-row">
                <img src={js} alt="" />
                <h3 className="project-container-posts-header">Node JS</h3>
                <p className="project-container-posts-discr">
                  NodeJS - это платформа для разработки на языке
                  программирования Javascript, как бэкенд, так и фронтенд части.
                  NodeJS использует движок V8.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="project-container-post-col">
          <h2 className="project-container-main-content-header">
            web technology
          </h2>

          <div className="project-container-posts-col" id="git">
            <p>
              Система контроля версий (Version Control System, VCS) представляет
              собой программное обеспечение, которое позволяет отслеживать
              изменения в документах, при необходимости производить их откат,
              определять, кто и когда внес исправления и т.п.
            </p>
            <p>
              Git – распределенная система контроля версий, разработанная
              Линусом Торвальдсем для работы над ядром операционной системы
              Linux. Среди крупных проектов, в рамках которых используется git,
              можно выделить ядро Linux, Qt, Android. Git свободен и
              распространяется под лицензией GNU GPL 2 и, также как Mercurial,
              доступен практически на всех операционных системах.
            </p>
            <p>
              Архитектура трех деревьев Система контроля версий git имеет
              архитектуру трех деревьев. Перед тем как перейти к ее описанию,
              для начала, рассмотрим архитектуру двух деревьев. Схематично она
              выглядит так, как представлено на рисунке ниже.
            </p>
          </div>

          <div className="project-container-posts-col">
            <p>
              Репозиторий – это хранилище для нашего проекта, которое
              обслуживает система контроля версий. Сама операция отправки
              изменений называется commit, на русском языке ее так и называют –
              коммит. Если нам необходимо взять данные из репозитория, то мы
              осуществляем операцию checkout, которая на русском произносится
              как чекаут. Для названий операций commit и checkout не используют
              прямой перевод, предпочитают транскрипцию.
            </p>
            <p>
              $ git checkout имя ветки Переключается на выбранную ветку и
              обновляет рабочую директорию до её состояния <br />
              $ git push удалённый репозиторий ветка Загружает все изменения
              локальной ветки в удалённый репозиторий <br />$ git pull Загружает
              историю из удалённого репозитория и объединяет её с локальной.
              pull = fetch + merge
            </p>
            <p>
              NodeJS - это платформа для разработки на языке программирования
              Javascript, как бэкенд, так и фронтенд части. NodeJS использует
              движок V8.
            </p>
          </div>
          <div className="project-container-posts-col">
            <p>
              NPM - это менеджер пакетов, которые вы можете подключить в ваш
              проект. Например, если вы хотите, чтобы ваш проект использовал
              Bootstrap, вам необязательно вручную копировать все необходимые
              файлы с сайта Bootstrap и хранить эту библиотеку в репозитории
              GIT, достаточно указать в конфигурационном файле вашего проекта
              одной строчкой, что вам нужен Bootstrap и пакетный менеджер npm
              установит Bootstrap в копию вашего проекта, при этом нет нужны
              хранить все подобные библиотеки в репозитории GIT вашего проекта.
            </p>
            <p>
              С помощью менеджера npm можно добавить в ваш проект огромное
              количество всевозможных библиотек и инструментов и в следующих
              уроках я покажу как установить NodeJS и пользоваться менеджером
              пакетов npm, а также покажу как создаются современные frontend
              приложения.
            </p>
          </div>
        </div>
      </div>

      <footer className="footer" id="footer">
        <div className="author">
          <img src="" alt="" />
          <p>{author}</p>
          <p>
            <a
              className="link-footer"
              href="https://github.com/Alexander-Mazhara/"
            >
              github
            </a>
          </p>
          <p>
            <a
              className="link-footer"
              href="https://camouf.ru/designes/ready-psd-layouts-for-saito/7836.html"
            >
              Оригинал дизайна страницы
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Maincontainer;
