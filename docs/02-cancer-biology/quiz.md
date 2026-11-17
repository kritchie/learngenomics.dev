---
title: "Quiz: Cancer Biology"
sidebar_label: Chapter Quiz
description: "Check your understanding of how cancer starts, the hallmarks of cancer, oncogenes and tumor suppressors, signaling pathways, tumor evolution and inherited risk."
quiz: true
hide_table_of_contents: true
---

Check your understanding of this chapter, from what makes a tumor malignant to how an inherited variant raises cancer risk. You can retake the quiz as many times as you like.

<Quiz>

<Question>

Which feature makes a tumor malignant rather than benign?

<Option>It has grown large enough to press on a vital organ, as some brain tumors do.</Option>
<Option>Its cells look abnormal under a microscope but have not left the place where they started.</Option>
<Option correct>Its cells invade the tissue around them, and some can spread to other parts of the body.</Option>
<Option>Its cells divide faster than normal cells and build up into extra tissue.</Option>

<Explanation>

A malignant tumor is cancer because its cells invade nearby tissue and can spread through the blood or lymph system. A benign tumor can still be dangerous when it presses on something vital, and abnormal cells that have not invaded (carcinoma in situ) or fast-dividing normal-looking cells (hyperplasia) are not cancer. See [What Is Cancer?](01-what-is-cancer.md#tumors).

</Explanation>
</Question>

<Question answer={false}>

Most tumors start when a single mutation turns a normal cell into a fully cancerous cell in one step.

<Explanation>

A single change is rarely enough. A cell gains a change that lets it divide a little more often, one of its descendants gains a second change and outgrows the rest, and the process repeats, with each new driver mutation setting off another wave of growth. See [What Is Cancer?](01-what-is-cancer.md#how-cancer-starts).

</Explanation>
</Question>

<Question multiple>

A tumor contains more than cancer cells. Which statements about the normal cells in a tumor are correct?

<Option correct>Some immune cells help the tumor; macrophages, for example, can help build new blood vessels.</Option>
<Option>Immune cells inside a tumor always attack the cancer cells around them.</Option>
<Option correct>When a tumor sample is sequenced, its normal cells are sequenced too, so tumor purity has to be accounted for.</Option>
<Option>The normal cells in a tumor carry the same driver mutations as the cancer cells.</Option>

<Explanation>

Tumors recruit immune cells, and some of them, such as macrophages, end up helping the tumor instead of attacking it. Normal cells in a sample carry only the reference base, so they dilute the tumor's variants, which is why purity matters when calling variants. See [Hallmarks of Cancer](02-hallmarks-of-cancer.md#how-cells-gain-the-hallmarks) and [More Than Cancer Cells](02-hallmarks-of-cancer.md#more-than-cancer-cells).

</Explanation>
</Question>

<Question>

A child has retinoblastoma tumors in both eyes. What does the two-hit model suggest?

<Option>The child most likely has the nonheritable form, in which both hits happened in the same cell.</Option>
<Option>One of the child's parents must have had retinoblastoma and passed on the broken gene.</Option>
<Option>The tumors were most likely started by an oncogene that needed only one changed copy.</Option>
<Option correct>The child was most likely born with one broken copy of `RB1` in every cell, so one more hit in any retinal cell could start a tumor.</Option>

<Explanation>

In the heritable form, every cell starts with the first hit, so several cells often take a second hit, and a tumor in both eyes suggests this form. The broken copy does not have to come from a parent: it can also arise new in a sperm or egg cell or early in development. See [Oncogenes and Tumor Suppressors](03-oncogenes-and-tumor-suppressors.md#two-hits).

</Explanation>
</Question>

<Question>

Across many tumors, nearly all mutations in *IDH1* change the same amino acid, at position 132. What does this pattern suggest?

<Option correct>*IDH1* acts as an oncogene, because only certain changes switch its protein on.</Option>
<Option>*IDH1* acts as a tumor suppressor, because the mutations cut its protein short.</Option>
<Option>*IDH1* mutations are passengers, because a driver would be hit at many different positions.</Option>
<Option>*IDH1* is a DNA repair gene, because losing it speeds up mutations in other genes.</Option>

<Explanation>

Oncogenes are mutated again and again at the same few positions, while tumor suppressors are often hit by changes that cut the protein short, spread along much of the gene. *IDH1* was first thought to be a tumor suppressor, but this pattern marked it as an oncogene. The pattern is a strong clue, not a rule: *TP53* is a tumor suppressor even though most of its mutations are recurring missense changes. See [Drivers and Passengers](03-oncogenes-and-tumor-suppressors.md#drivers-and-passengers).

</Explanation>
</Question>

<Question multiple>

Which changes can keep the RAS–MAPK relay signaling after it should have faded?

<Option correct>A *KRAS* G12D mutation</Option>
<Option>A deletion of *CDKN2A*</Option>
<Option correct>Loss of *NF1*</Option>
<Option>An amplification of *MDM2*</Option>
<Option correct>A *BRAF* V600E mutation</Option>

<Explanation>

Changes at amino acid 12 of KRAS make RAS resistant to GAPs, *NF1* makes a GAP for RAS, so losing it keeps RAS on longer, and BRAF V600E makes a more active kinase that works without RAS. Deleting *CDKN2A* and amplifying *MDM2* break the RB and p53 brakes instead. See [Locking the Relay On](04-signaling-pathways.md#locking-the-relay-on) and [The p53 Brake](04-signaling-pathways.md#the-p53-brake).

</Explanation>
</Question>

<Question>

Why can a deletion of *CDKN2A* disable both the RB brake and the p53 brake at once?

<Option>*CDKN2A* makes both the RB protein and the p53 protein.</Option>
<Option>Losing *CDKN2A* causes extra copies of *MDM2* and *CDK4* to appear.</Option>
<Option correct>The same stretch of DNA is read in two reading frames to make p16 for the RB brake and ARF for the p53 brake.</Option>
<Option>*CDKN2A* is a DNA repair gene, so losing it damages *RB1* and *TP53*.</Option>

<Explanation>

p16 blocks CDK4 and CDK6 and keeps RB holding on to E2F, and ARF blocks MDM2 so p53 can act. Both come from the same stretch of DNA, so one deletion removes both proteins. See [The p53 Brake](04-signaling-pathways.md#the-p53-brake).

</Explanation>
</Question>

<Question>

A tumor sample is 60% cancer cells. A mutation sits on one of two copies of a chromosome, and every cancer cell carries it. About what share of the reads at that position should show the mutation?

<Option>About 60%</Option>
<Option>About 10%</Option>
<Option>About 50%</Option>
<Option correct>About 30%</Option>

<Explanation>

In a pure tumor, a clonal mutation on one of two copies shows up in about half the reads, but normal cells carry only the reference base and dilute it, so in a 60% tumor sample it appears in about 30%. A mutation carried by only some of the cancer cells, a subclone, shows up in an even smaller share. See [Reading Clones in the Data](05-how-tumors-evolve.md#reading-clones-in-the-data).

</Explanation>
</Question>

<Question answer={false}>

The cells that cause a relapse after treatment usually gain their resistance only after the treatment starts.

<Explanation>

Treatment selects cells that can already resist it, and those cells are often present before treatment as a small subclone, too small to notice. In childhood leukemia and in colorectal cancer treated with drugs that block EGFR, the resistant cells had likely been there all along. See [Surviving Treatment](05-how-tumors-evolve.md#surviving-treatment).

</Explanation>
</Question>

<Question>

In a study of children and adolescents with cancer, most carriers of a harmful germline variant whose family history was known had no relatives with cancer. Which explanation does the chapter give?

<Option>Germline variants are found only in tumor cells, so relatives cannot carry them.</Option>
<Option correct>The variant may have low penetrance, or it may have arisen new in the child.</Option>
<Option>Childhood cancers are caused only by common variants that each raise risk a little.</Option>
<Option>Germline variants in children are always mosaic, so their parents never carry them.</Option>

<Explanation>

A predisposition variant raises the odds of cancer, and some carriers never develop it, so a parent can carry the variant without having cancer. The variant can also be new: in people with Li-Fraumeni syndrome, at least 14% of the *TP53* variants had arisen new in the person, and only some of those were mosaic. See [Inherited Risk](06-inherited-risk.md#predisposition-in-childhood-cancer).

</Explanation>
</Question>

</Quiz>
