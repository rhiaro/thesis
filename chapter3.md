---
layout: default
title: Chapter 3 - Social Semantics
---

# Social Semantics

## Introduction

The [previous chapter](/thesis/chapter2) discusses an individual's relation with their online representation; how the affordances of a profile impact the culture of an online community, including how users interact and relate to each other, and how users understand themselves as part of the community. The studies described consider profiles and users *within* individual systems, yet online representations of people are employed across different systems in great and exciting variety. In order to build on our understanding of the role an online profile plays in self-presentation, identity and interaction we need a more nuanced understanding of what a 'profile' *is* in a general sense. What is the *meaning* of a profile? Our goal therefore is to establish a framework for classifying online profiles so that they may be more effectively compared despite the differences between systems and communities.

This requires examining profiles from a number of different (potentially overlapping) perspectives:

* Active users of a system, who maintain a profile.
* Passive users of a system, who may not have a profile of their own.
* System designers and developers, who must model and display data about their users.
* Third-party developers who build additional services using data from another system.
* Regulatory bodies which seek to influence or direct how systems are used for legal, ethical or economic reasons.

In this chapter we first review existing work around how particular systems model their users, or allow users to present themselves. Secondly we undertake an empirical analysis of digital representations of users on 20 different online systems. From these we derive a set of constructs to capture the most important features of profiles in online systems and evaluate this framework by classifying a further 10 systems according to it (or something). We propose this as groundwork for deriving requirements for profiles when designing new systems which need digital representations of their users, as well as for assessing the benefits and drawbacks of how profiles are implemented in existing systems in such a way that takes into account the contexts in which they are used.

https://dud.inf.tu-dresden.de/literatur/Anon_Terminology_v0.21.pdf

## Background

### When is a person not a person?

Data modelling and knowledge representation

* FOAF + Relationships
* VCard
* SIOC
* Person or webpage: who cares, does it matter, and httpRange-14 (it is at least worth mentioning if we're going to turn this work into something useful for pedantic engineers etc; the real question is: can I fit this discussion into a section in a chapter, or should I write a whole book on it?)

http://blog.plaxo.com/2004/02/plaxo_and_foaf_/

### Control

Inferred data from analyses... what is personal data? People can't really see how they're perceived by advertisers etc. They have an online profile that's totally opaque to them.

* danah boyd mirror
* richard gomer at soton (meaningful consent data useage)
* http://arxiv.org/pdf/1412.6159v2.pdf

### User perceptions of profiles

Studies about what users feel they should put in a profile due to community norms, expectations, particular service. Or what users feel might be the consequences of how they use a profile. Particular outcomes of profile usage.

#### [Self-Presentation of Personality During Online Profile Creation](https://www.aaai.org/ocs/index.php/ICWSM/09/paper/viewFile/156/482)

This user study got 52 people to first describe how they want others to perceive them based on an online profile, then asked them to fill out a minimum of 10 from 22 attributes and after each one, they rated the impression their profile gave against TIPI personality attributes. Satisfaction with how the profile matched their ideal self-presentation converged after 10 attributes, with free-form attributes tending to increase satisfaction the most. However this study asks participants to fill out a profile in a void, neglecting that profiles are usually updated with a purpose or awareness of a particular context in mind. Participants indicate a *general* preferred impression they want to give to others, but who are the consumers of the profile? The participants do not indicate who their expected audience is or what they think the profile is for.

* [Self-Presentation and Gender on MySpace](https://www.researchgate.net/publication/222435595_Self-Presentation_and_Gender_on_MySpace)
* Disabilities
 * [Opportunities for People with Disabilities in the Virtual World of Second Life](http://onlinelibrary.wiley.com/doi/10.1002/j.2048-7940.2010.tb00056.x/pdf)
 * [Disability discourses for online identities](http://www.tandfonline.com/doi/pdf/10.1080/09687590220139883?instName=University+of+Edinburgh)
 *
* [Mick or Keith: blended identity of online rock fans](http://download.springer.com/static/pdf/515/art%253A10.1007%252Fs12394-009-0015-5.pdf?originUrl=http%3A%2F%2Flink.springer.com%2Farticle%2F10.1007%2Fs12394-009-0015-5&token2=exp=1454607007~acl=%2Fstatic%2Fpdf%2F515%2Fart%25253A10.1007%25252Fs12394-009-0015-5.pdf%3ForiginUrl%3Dhttp%253A%252F%252Flink.springer.com%252Farticle%252F10.1007%252Fs12394-009-0015-5*~hmac=857c96e9bbf2551fe5a284c7ae7af3136d8ad2f82d8f48c12967dd96fd4827eb)

### Profiles with a purpose

More in depth on how context informs profile useage. (this might be more chapter 2-y)

* [Managing Impressions Online: Self-Presentation Processes in the Online Dating Environment](http://onlinelibrary.wiley.com/doi/10.1111/j.1083-6101.2006.00020.x/full)

#### [Constructing academic alter-egos: identity issues in a blog-based community](http://download.springer.com/static/pdf/526/art%253A10.1007%252Fs12394-009-0020-8.pdf?originUrl=http%3A%2F%2Flink.springer.com%2Farticle%2F10.1007%2Fs12394-009-0020-8&token2=exp=1454607008~acl=%2Fstatic%2Fpdf%2F526%2Fart%25253A10.1007%25252Fs12394-009-0020-8.pdf%3ForiginUrl%3Dhttp%253A%252F%252Flink.springer.com%252Farticle%252F10.1007%252Fs12394-009-0020-8*~hmac=19ee001e710533a633cd3e827bafee6bf6017106127489f26f407924383cfa82)

Observational study of over 200 blogs within a particular community, and semi-structured interviews with 40 bloggers. Identifies five aspects which affect how bloggers build their identity (name and blog title; profiles; post content; voice; affiliations; visual design) and demonstrates that use of consistent pseudonyms allows participation in a community whilst maintaining a layer of indirection between their blog-context activities and their 'physical lives'. Pseudonymity is a norm in this community, but distrust is not of other community members, but the outside world or people who may randomly stumble across blog, or prevent the blog from showing up in search results for the author's real name. Identity performed through initial setup of information displayed on and appearance of blog is reinforced by content, activities and interactions over time. Pseudonyms are rarely changed, and when they are it's to explore a real life transition, and audiences are usually invited along to the new blog.

* [Casanovas of the Virtual World. How Boys Present Themselves on Dating) Websites.](https://www.researchgate.net/publication/47502962_Casanova_s_of_the_Virtual_World_How_Boys_Present_Themselves_on_Dating_Websites)
* [Information Behavior and the Formation and Maintenance of Peer Cultures in Massive Multiplayer Online RolePlaying Games: A Case Study of City of Heroes](http://www.digra.org/wp-content/uploads/digital-library/06278.15067.pdf)
* [The truth about online dating](http://drrobertepstein.com/pdf/Epstein-TheTruthAboutOnlineDating-2-07.pdf?lbisphpreq=1)

### Everybody knows I'm a dog

Studies on constraints of social networks for 'real' relationships, which have rules about accurate self presentatio

### Misc

To sort (or use in ch2)

* [Personality in cyberspace: personal Web sites as media for personality expressions and impressions.](http://www.ncbi.nlm.nih.gov/pubmed/16784349)
* [Composing Cyberspace: Identity, Community, and Knowledge in the Electronic Age](https://books.google.com/books?id=jasQAQAAMAAJ)
* [Mask and Identity: The Hermeneutics of Self-Construction in the Information Age  pp. 191-214](http://ebooks.cambridge.org/chapter.jsf?bid=CBO9780511606373&cid=CBO9780511606373A021)
* [Anonymity and Online Community: Identity Matters](http://www.webcitation.org/query?url=http%3A%2F%2Falistapart.com%2Farticles%2Fidentitymatters&date=2008-09-28)
* [Can You See Me Now? Audience and Disclosure Regulation in Online Social Network Sites](http://bst.sagepub.com/content/28/1/20)
* [The Online Disinhibition Effect](http://online.liebertpub.com/doi/abs/10.1089/1094931041291295)
* [Social Comparison 2.0: Examining the Effects of Online Profiles on Social-Networking Sites](http://online.liebertpub.com/doi/abs/10.1089/cyber.2010.0120)

## Defining an online profile

What are potential variants in how profiles are formed which influence a community (and vice versa)?

### Method

* Study: Start with questions to answer about profiles on different sites; refine questions with progress; find overlaps, similarities, differences; turn this into a framework for categorisation/comparison of types of profile. Probably an actual named method for this.
* Justify selection of starting 20 sites
** Alexa?
** Social Machines classifications?
** Some dimensions to try to cover, like purpose, user base, business model, ..
** types of social media from a classification, eg. Kaplan & Haenlein 2010, White 2014
* Evaluation: apply taxonomy to more. Selection how?

### Limitations

* Western bias
* Frequency of changes

### Results

WIP:

* http://rhiaro.co.uk/2015/06/what-profile
* https://github.com/rhiaro/profiles/blob/master/study.md

(Maybe a summary/table, and raw results go in an appendix)

### Taxonomy

Something coherant and useful, hopefully.

### Evaluation

Apply taxonomy

## Conclusions





# Reading notes (to condense)

## Self-Presentation of Personality During Online Profile Creation

### Scott Counts & Kristin Stecher 2009

User study. Fill in fake profile, vs. how it compares to personality.

People are able to create profiles they feel match desired self-presentation.

Free form is best.

Only a few fields sufficient.

Self presentation: image or idea of the self, created for social purposes.

In Western culture, personality traits are most important (Cousins 1989)

Stecher & Counts 2008b - only 5 attributes needed to make meaningful inferences.

Self-presentation online = many factors - friends, testimonials, interests, photos, bio. More or less easily faked or controlled, eg. friends profile pics not controlled, but friends selected.

This study - only controlled by users: more easily faked.

Gosling 2003 - people usually truthful.

'User stands to gain from a more nuanced understanding of how attributes contribute to desired self-presentation'.

Online self-presentation characterisation: status (Donath 2007), tastes (Liu 2007), personality (this, based on 1890 James taxonomy: material, social, spiritual).

Western = individualistic. More spiritual. Which actually means like personality and accomplishments and abilities.

#### Study

3 questions:

* How do people characterise ideal self?
* As they build profile, does online impression converge on ideal?
* What types and attributes contribute most?

52 participants.

* Free form: how do you want others to percieve you based on profile? Sorted answers according to James taxonomy.
* Create a profile - fill 22 attributes, from fb (& Lampe 2006, Stecher 2008b). Minimum 10.
* After each attribute, rate profile against TIPI personality traits, 1-7 Likert.
* Rate how they want others to see them, against TIPI.

Satisfaction converged at 10 attributes, which was also the most common number filled out (==>> this was the required minimum!)

==>> This study misses *context* of profile creation... Profiles usually created with a purpose/community in mind.

More free form / expressive attributes contributed more to satisfaction with self-representation. Exceptions - college was high, music was low.

Fiore 2008 - agrees free form is more predictive of attractiveness.

## Constructing academic alter egos: identity issues in a blog-based community

### Dennen 2009

Online interaction = opportunity for exploring identity.

This is about community of pseudonymous bloggers norms, identity performance.

Blog elements through which identity maybe expressed:

* name and blog title
* profiles
* post content
* voice
* affiliations
* visual design

'Blog identities are constructions whoch develop over time'

Narratives are acts of self-construction and self-depiction. Agency. (Bruner 1994)

Some are seeking status.

Reputation and appearance -> trust (Daneshgar & Ho 2008)

Identity construction is ongoing, conscious or unconscious.

Madden 2007 - 1/2 adults searched themselves online, awareness of info out there.

Sharing key to participating. Lampe 2007 - fb profiles with more info -> more friends.

Associations with others provide identity cues - boyd & Ellison 2008

'Blogs differ from facebook in terms of identity expectations.'

Answers will help designers understand what their members might like/need.

Blogging different because individual members have 'ownership over defined spaces', 'no clear entity either owns or defines the community as a whole'.

* Q1. What elements constitute and contribute to a blogger's identity?
* Q2. Why do bloggers construct alternate or pseudonymous identities?
* Q3. How are these individual blogger identities shaped and affected by participation in the larger community?

Blogademe - predominiately N. American academics.

Most sole authors, pseudonyms. Wide topics. Diaristic.

Community from topical proximity not physical proximity.

#### Study

Observed and engaged with since 2004. Primarily observation. Approached used by others studying online communities - Gatson & Zweerink 2004.

Core 200 blogs, additional at various points. Field notes and archives are documentation. 40 semi-structured interviews.

* [Lincoln & Guba 1985 for credibility](https://www.google.com/?ion=1&espv=2#q=lincoln%20and%20guba%201985%20credibility) of researcher in study.

'petite generalizations' - Stake 1995.

Blogs analysed as part of collective community with overaching identity, not as individual artifacts.

Idenitty choices reinforce community norms. Desire to belong.

#### Name and blog title

Title may expand on pseudonym. Both include clues about person and intent. Pseudonyms norm, but anonymity not accepted. Trust. Norm to use consistent pseudonym. Infrequent changes.

Use of changing names and blog titles to explore transitioning real life identity. Audience usually invited.

#### Profiles

Standard fields or free form. Blurb may appear in blog side bar. Tend to remain static over time. Statements touch upon major roles played and blog topics. Some opt for no profile.

#### Post content

Long term engagement gives a fuller sense of authorship identities.

Some assume prior readership in the language used. Indicates what's important. Not diary, dialogue with readers. What is shared or not - communicates persona in public.

#### Voice

Anonymous posts were identifiable from voice.

Some imitate each other to make a point. Affects readership/appeal.

#### Affiliation

Sidebar. Blogrolls; sometimes mutliple for communities. Also non-blog links.

#### Visual design

Personalise over time. Avatar. Many share photos as banner.

Some say they subscribe with RSS but click through to read in context.

#### Altogether

= comprehensive persona.

Surface level clues, then reinforced over time. Consistent over time.

A blogging identity = a context-driven representation of a person. Roots in f2f but highlights or downplay characteristics based on community.

High privacy concern - context collapse.

Pseudonyms - stable identity - critical for community development. 95% pseudonymous. Not extreme measures to keep IRL and blog separate. Just indirection layer.

Particiapation > privacy concerns.

Pseudonyms are norm, marker of community membership. New members choices guided by community norms, less effort than earlier members.

Outsiders uncomfortable with pseudonyms. Privilige! Bloggers don't care.

Blogademe bloggers are not academic focussed. 'Whole person' not just professional. Find that most/all accurately represent themselves. Not many dog bloggers.

Community shares identity/privacy protection practices. Warn each other if close to being 'outed' by too revealing posts. Distrust is not of others in the community, but random people stumbling across.

Identities constructed in context of community.

Tension between privacy and community.

"bloggers must deal with the complexity of representing themselves accurately while at the same time protecting themselves from being readily identified outside the community. *Such is the challenge of discussing potentially sensitive or personal details in a public, archived and indexable format*"

## How do people with disabilities use and experience virtual worlds

### Stendal 2012

This is a giant literature review with lots of stuff about the methodology for doing literature reviews.

People with disabilities have problems with access and acceptance. Little research on virtual worlds and disabled people. 54 articles reviewed and categorised.

Online provides control over disclosure of impairment - Bowker and Tuffin 2002.

New friendships and reduced isolation - Bradley & Poppin 2003.

Virtual worlds are potentially harmful if they fail to provide users with option to conceal disability - Ford 2001.

Some functionality may reconstruct disability - Carr 2010.

Inclusion in Second Life - Stewart 2010.

Studies of virtual worlds focus on rehabilitation or games that teach life skills.

## digitalvertigo

## AJ Keen 2012

Sheryl Sandberg in 2012 (while COO fb): "Profiles will no longer be outlines, but detailed self portraits... this shift towards authenticity will take getting used to"

Zuckerberg 2009: 2 identities = lack of integrity.

Ben Zimmerman re: Zuckerverbs "language is being recast... into a utilitarian tool for 'expressing' relationships to objects... in a remarkablky unexpressive fashion" (63)