---
title: "Quiz: Advanced Topics"
sidebar_label: Chapter Quiz
description: "Check your understanding of alternative splicing, epigenetic marks, noncoding RNAs and the structure of DNA."
quiz: true
hide_table_of_contents: true
---

Test what you took away from the advanced topics: how splice sites are chosen, how epigenetic marks are copied and measured, what noncoding RNAs do and how DNA is built. You can retake the quiz as often as you like.

<Quiz>

<Question>

Nearly every intron starts with GT and ends with AG. Why can't these two pairs of letters be enough for the spliceosome to choose where to splice?

<Option>The spliceosome reads only the DNA, so it can't see the GT and AG in the RNA</Option>
<Option>Only about half of introns actually use GT and AG</Option>
<Option correct>GT and AG turn up everywhere in the genome, so other signals must help pick the real sites</Option>
<Option>GT and AG mark exons, not introns, so they only show where splicing should not happen</Option>

<Explanation>

GT and AG are far too common to mark splice sites on their own. Splicing enhancers and silencers in exons and introns are bound by RNA-binding proteins that make a nearby site more or less likely to be used, and which of these proteins a cell makes differs between cell types. See [Alternative Splicing](alternative-splicing.md#how-splice-sites-are-chosen).

</Explanation>
</Question>

<Question>

In spinal muscular atrophy, *SMN2* codes for the same protein as the lost *SMN1* gene but can't make up for it. Why?

<Option correct>A C-to-T change in exon 7 that keeps the same amino acid weakens a splicing enhancer, so exon 7 is skipped in most *SMN2* mRNA</Option>
<Option>A C-to-T change in exon 7 creates a stop codon, so the protein is cut short</Option>
<Option>*SMN2* is deleted together with *SMN1* in most patients</Option>
<Option>A change in exon 7 breaks the GT at the start of the next intron, so the intron is kept in the mRNA</Option>

<Explanation>

The change in *SMN2* doesn't alter the amino acid, which is why variants like it are easy to miss. It weakens a splicing enhancer, and the spliceosome skips exon 7. The approved antisense drug works by making the spliceosome more likely to keep that exon. See [Alternative Splicing](alternative-splicing.md#when-splicing-goes-wrong).

</Explanation>
</Question>

<Question>

What is the reverse complement of `5′-AAGCT-3′`?

<Option>`5′-TTCGA-3′`</Option>
<Option>`5′-TCGAA-3′`</Option>
<Option>`5′-AAGCT-3′`</Option>
<Option correct>`5′-AGCTT-3′`</Option>

<Explanation>

To write the partner strand from 5′ to 3′, reverse the sequence and swap each base for its partner: `AAGCT` reversed is `TCGAA`, and swapping bases gives `AGCTT`. `TTCGA` only swaps the bases, and `TCGAA` only reverses them. See [The Structure of DNA](dna-structure.md#reading-the-other-strand).

</Explanation>
</Question>

<Question answer={false}>

GC-rich DNA is harder to pull apart than AT-rich DNA, and the third hydrogen bond in each G–C pair fully explains this.

<Explanation>

The extra hydrogen bond explains only part of it. About half of the difference comes from G and C stacking more strongly on the bases next to them. See [The Structure of DNA](dna-structure.md#two-strands-opposite-directions).

</Explanation>
</Question>

<Question>

Right after a cell copies its DNA, what is the state of a CpG site that was methylated on both strands before copying?

<Option>Methylated on both strands, because the new strand is built from 5-methylcytosine</Option>
<Option correct>Methylated on the old strand only, until DNMT1 adds a methyl group to the new strand</Option>
<Option>Unmethylated on both strands, until DNMT3A and DNMT3B add the marks back</Option>
<Option>Methylated on the new strand only, because TET enzymes remove the old marks</Option>

<Explanation>

The new strand is built from plain cytosines, so the site is hemimethylated. UHRF1 binds these half-marked sites, and DNMT1 methylates the new strand's C wherever the old strand has a mark. DNMT3A and DNMT3B add marks to sites that had none, which is a different job. See [Epigenetic Modifications](epigenetic-modifications.md#copying-the-marks).

</Explanation>
</Question>

<Question multiple>

Which statements about bisulfite sequencing are correct?

<Option correct>After alignment, a C that reads as T was unmethylated</Option>
<Option>It turns 5-methylcytosine into uracil and leaves unmethylated cytosine alone</Option>
<Option>It is gentler on DNA than enzymatic methyl-seq (EM-seq)</Option>
<Option correct>It reads both 5-methylcytosine and 5-hydroxymethylcytosine as C</Option>

<Explanation>

Bisulfite turns unmethylated cytosine into uracil, which PCR copies as T, and leaves 5-methylcytosine alone. Neither 5-methylcytosine nor 5-hydroxymethylcytosine becomes uracil, so bisulfite can't tell them apart. Bisulfite damages and breaks DNA, which is why the gentler EM-seq was developed. See [Epigenetic Modifications](epigenetic-modifications.md#measuring-the-marks).

</Explanation>
</Question>

<Question>

Why does a single microRNA turn down many different genes?

<Option>It is cut into many different pieces by Dicer, and each piece targets a different gene</Option>
<Option>It pairs along its full length with each mRNA, and long matches are common</Option>
<Option correct>Its seed, nucleotides 2 to 7, is only six letters long, so it matches sites in many mRNAs</Option>
<Option>It binds the DNA of each target gene and blocks transcription</Option>

<Explanation>

Inside Argonaute, the microRNA's seed pairs with matching sites in mRNAs, mostly in their 3′ UTRs, and a six-letter seed can match many genes. Studies that measured proteins found that one microRNA lowered hundreds of proteins, most only a little. See [Noncoding RNAs](non-coding-rnas.md#micrornas).

</Explanation>
</Question>

<Question multiple>

Which statements about long noncoding RNAs (lncRNAs) does the chapter support?

<Option>The 200-nucleotide cutoff that defines them marks a natural boundary in how RNAs work</Option>
<Option correct>GENCODE lists more lncRNA genes than protein-coding genes</Option>
<Option>Every lncRNA is spliced and given a 5′ cap and a poly-A tail</Option>
<Option correct>At some lncRNA genes, the effect on a neighboring gene comes from transcription, splicing or the promoter, not from the RNA</Option>

<Explanation>

GENCODE release 50 has about 35,000 lncRNA genes against about 20,000 protein-coding genes. In a study of 12 lncRNA loci, the effects on neighboring genes didn't need the lncRNA itself. The 200-nucleotide cutoff was chosen arbitrarily because it's convenient for lab methods, and while many lncRNAs are capped, spliced and given a tail, some aren't. See [Noncoding RNAs](non-coding-rnas.md#long-noncoding-rnas).

</Explanation>
</Question>

</Quiz>
