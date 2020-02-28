---
title: Home
sidebar:
  entries:
    - title: Hello!
      url: '#intro'
      is_primary: true
    - title: Current Projects
      url: '#current-projects'
      is_primary: false
    - title: Finished Projects
      url: '#finished-projects'
      is_primary: false
    - title: Get in touch
      url: '#three'
      is_primary: false
sections:
  - type: intro
    title: Temporary Games
    subtitle: |-
       Making games with a bit of whimsy.
    section_id: intro
    background_style: style1
    actions:
      - label: Current Projects
        url: '#current-projects'
        is_scrolly: true
        is_primary: false
      - label: Finished Projects
        url: '#finished-projects'
        is_scrolly: true
        is_primary: false
    component: Intro
  - type: spotlights-wip
    title: Current projects
    section_id: current-projects
    background_style: style1
    component: SpotlightsWIP
  - type: spotlights2
    title: Finished projects
    section_id: finished-projects
    background_style: style3
    component: Spotlights2
  - type: features
    title: Womp Womp
    # subtitle: >-
    #   Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam turpis
    #   mauris, eu ultricies erat malesuada quis. Aliquam dapibus, lacus eget
    #   hendrerit bibendum, urna est aliquam sem, sit amet imperdiet est velit
    #   quis lorem.
    section_id: womp-womp
    background_style: style2
    features_list:
      - title: Lorem ipsum amet
        text: >-
          Phasellus convallis elit id ullam corper amet et pulvinar. Duis
          aliquam turpis mauris, sed ultricies erat dapibus.
        icon: fa-code
      - title: Aliquam sed nullam
        text: >-
          Phasellus convallis elit id ullam corper amet et pulvinar. Duis
          aliquam turpis mauris, sed ultricies erat dapibus.
        icon: fa-lock
      - title: Sed erat ullam corper
        text: >-
          Phasellus convallis elit id ullam corper amet et pulvinar. Duis
          aliquam turpis mauris, sed ultricies erat dapibus.
        icon: fa-cog
      - title: Veroeros quis lorem
        text: >-
          Phasellus convallis elit id ullam corper amet et pulvinar. Duis
          aliquam turpis mauris, sed ultricies erat dapibus.
        icon: fa-desktop
      # - title: Urna quis bibendum
      #   text: >-
      #     Phasellus convallis elit id ullam corper amet et pulvinar. Duis
      #     aliquam turpis mauris, sed ultricies erat dapibus.
      #   icon: fa-chain
      # - title: Aliquam urna dapibus
      #   text: >-
      #     Phasellus convallis elit id ullam corper amet et pulvinar. Duis
      #     aliquam turpis mauris, sed ultricies erat dapibus.
      #   icon: fa-diamond
    actions:
      - label: Learn more
        url: /generic
        is_scrolly: false
        is_primary: false
    component: Features
  - type: contact
    title: Get in touch
    text: >-
      Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam turpis
      mauris, eu ultricies erat malesuada quis. Aliquam dapibus, lacus eget
      hendrerit bibendum, urna est aliquam sem, sit amet imperdiet est velit
      quis lorem.
    section_id: three
    background_style: style2
    contact_list:
      - title: Address
        text: |-
          12345 Somewhere Road #654
          Nashville, TN 00000-0000
          USA
      - title: Email
        text: user@Hyperspace.tld
        url: '#'
      - title: Phone
        text: (000) 000-0000
    social:
      title: Social
      social_icons:
        - title: Twitter
          icon: fa-twitter
          url: '#'
        - title: Facebook
          icon: fa-facebook
          url: '#'
        - title: GitHub
          icon: fa-github
          url: '#'
        - title: Instagram
          icon: fa-instagram
          url: '#'
        - title: LinkedIn
          icon: fa-linkedin
          url: '#'
    component: Contact
menus:
  main:
    title: Home
    weight: 1
template: home
---
